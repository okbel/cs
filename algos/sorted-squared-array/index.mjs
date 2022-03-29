import assert from "assert";
import fn from "./algo.mjs";

// All Cases -> Format: [input, output]
// Write your tests below
const tests = [
  [
    [-1, -1, 2, 3, 3, 3, 4],
    [1, 1, 4, 9, 9, 9, 16],
  ],
  [
    [-2, -1],
    [1, 4],
  ],
  [
    [1, 2, 3, 5, 6, 8, 9],
    [1, 4, 9, 25, 36, 64, 81],
  ],
  [
    [-10, -5, 0, 5, 10],
    [0, 25, 25, 100, 100],
  ],
  [
    [-7, -3, 1, 9, 22, 30],
    [1, 9, 49, 81, 484, 900],
  ],
  [
    [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20],
    [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500],
  ],
];

try {
  console.log(`🌬️ Running ${tests.length} Tests.`);
  for (const [input, output] of tests) {
    assert.deepStrictEqual(
      fn.apply(null, [input]),
      output,
      `Error On Input -> ${JSON.stringify(input)}`
    );
  }
  console.log("All succeeded. ✅");
} catch (err) {
  console.log(err.message);
  console.log("Actual: ", err.actual);
  console.log("Expected: ", err.expected);
}
