import assert from "assert";
import { Console } from "console";
import fn from "./algo.mjs";

// All Cases -> Format: [input, output]
const tests = [
  [
    [
      [5, 1, 22, 25, 6, -1, 8, 10],
      [1, 6, -1, 10],
    ],
    true,
  ],
];

try {
  console.log(`🌬️ Running ${tests.length} Tests.`);
  for (const [input, output] of tests) {
    assert.strictEqual(
      fn.apply(null, input),
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
