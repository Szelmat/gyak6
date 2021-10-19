import { forEach, sum } from "./main";

describe("Testing mock functions", () => { 
  let mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);
});
