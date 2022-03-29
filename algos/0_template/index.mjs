import assert from "assert";
import fn from "./algo.mjs";

// All Cases -> Format: [input, output]
// Write your tests below
const tests = [[0, true]];

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
