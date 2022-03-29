// T: O(n)
// S: O(1)
function validateSubSeq(arr, seq) {
  let seqIdx = 0;
  let arrIdx = 0;
  while (seqIdx < seq.length && arrIdx < arr.length) {
    if (seq[seqIdx] === arr[arrIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === seq.length;
}

export default validateSubSeq;
