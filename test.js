import { forEach } from "./main";

describe("Testing mock functions", () => { 
  let mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  describe("Testing mock function cration", () => {
    test("The mock function is called twice", () => {
      expect(mockCallback.mock.calls.length).toBe(2);
    });
  });
});
