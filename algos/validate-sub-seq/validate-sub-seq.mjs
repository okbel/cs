function validateSubSeq(arr, seq) {
  let i = 0;
  let k = 0;
  while (i < seq.length) {
    while (k < arr.length) {
      console.log(seq[i], ",", arr[k]);
      if (arr[k] === seq[i]) {
        // console.log("match");
        i++; // increment pointer seq.
        k++; // increment arr
        break;
      }
      if (k === arr.length - 1) {
        // console.log("Stop, no match");
        return false;
      }
      k++; // increment arr
    }
    console.log("asd");
  }
  return true;
}

// console.log(validateSubSeq([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 8, 10]));
// console.log(validateSubSeq([5, 1, 22, 25, 6, -1, 8, 10], [200, 1, 6, 8, 10]));
// console.log(
//   validateSubSeq([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10])
// );
console.log(
  validateSubSeq([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10])
);
