## Algorithms

Here there are some basic to complex algorithms featured in LeetCode and many more.

- [Two Number Sum](/algos/two-number-sum)
- [Validate Sub Sequence](/algos/validate-sub-seq/)
- [Sorted Squared Array](/algos/sorted-squared-array/)

## To create a new Algo

Duplicate the `0_template` folder and rename with your algo name.

## Anatomy of tests

File: `algo.mjs` contains the algorithm. Should be default exported.

File `index.mjs` runs a tests suite and contains a set of tests where tests is an array of test (also array) where index 0 is the `input` and index 1 is the `output`. Test array lenght should always be 2, accounting for `input` and `output` respectively as previously mentioned.

Valid tests:

```json
[
  [[1], true], // case 1
  [[1, 2, 3], false] // case 2
]
```

Invalid tests:

```json
[[1, 2, 3, 4, true], 1, false]
```
