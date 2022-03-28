// function twoNumberSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     const n = arr[i];
//     for (let k = i + 1; k < arr.length; k++) {
//       const m = arr[k];
//       if (m + n == target) {
//         return [n, m];
//       }
//     }
//   }
//   return [];
// }

function twoNumberSum(arr, target) {
  let nums = {};
  for (const n of arr) {
    const match = target - n;
    if (match in nums) {
      return [n, match];
    } else {
      nums[n] = true;
    }
  }
}

console.log(twoNumberSum([9, 3, 5, -4, 8, 11, 1, -1, 6], 10));
