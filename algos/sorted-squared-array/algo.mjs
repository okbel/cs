// T: O(n log n)
// S: O(n)
// This solution is the simples but suboptimal
function fn2(arr) {
  return arr.map((n) => Math.abs(n) * Math.abs(n)).sort((a, b) => a - b);
}

// T: O(n)
// S: O(n)
// Optimal response - algo sorting always take at most
// O(nlogn) so pushing it to a O(n)
// is considered optimal response.
function fn(arr) {
  let start = 0;
  let end = arr.length - 1;
  let i = arr.length - 1;

  let newArray = Array.from({ length: arr.length });

  while (i >= 0) {
    if (Math.abs(arr[start]) <= Math.abs(arr[end])) {
      newArray[i] = Math.abs(arr[end]) * Math.abs(arr[end]);
      end--;
    } else {
      newArray[i] = Math.abs(arr[start]) * Math.abs(arr[start]);
      start++;
    }
    i--;
  }

  return newArray;
}

export default fn;
