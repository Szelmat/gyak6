import { forEach } from "./main";

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
  });
});
