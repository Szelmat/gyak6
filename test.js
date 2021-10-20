import axios from "axios";
import { forEach } from "./main";
import { Users } from "./users";

describe("Testing mock functions", () => { 
  let mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  describe("Testing mock function cration", () => {
    test("The mock function is called twice", () => {
      expect(mockCallback.mock.calls.length).toBe(3);
    });

    test("The first argument of the first function call was 0", () => {
      expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    test("The first argument of the second call to the function was 1", () => {
      expect(mockCallback.mock.calls[1][0]).toBe(1);
    });

    test("The return value of the first call to the function was 42", () => {
      expect(mockCallback.mock.results[0].value).toBe(42);
    });
  });

  describe("Testing .mock()", () => {
    // Minden mock függvény tartalmaz egy .mock tulajdonságot, ami a függvény
    // hívásának módjáról tárol információt
    // Eltárolja az összes this értéket is
    const a = new mockCallback();
    const b = {};
    const bound = mockCallback.bind(b);
    test("the instances of mockCallback contain a and b", () => {
      expect(mockCallback.mock.instances).toEqual(expect.arrayContaining([a]));
      expect(mockCallback.mock.instances).toEqual(expect.arrayContaining([b]));
    });
  });
});

describe('mocking axios', () => {
  jest.mock('axios');
  test('should fetch users', () => {
    axios.get = jest.fn();
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    (axios.get).mockResolvedValue(resp);

    return Users.all().then(data => expect(data).toEqual(users))
  });
});
