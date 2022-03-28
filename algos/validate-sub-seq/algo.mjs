export default function validateSubSeq(arr, seq) {
  let i = 0; // arr idx
  let k = 0; // seq idx
  while (i < arr.length && k < seq.length) {
    if (arr[i] === seq[k]) k++;
    i++;
  }
  return k === seq.length;
}
