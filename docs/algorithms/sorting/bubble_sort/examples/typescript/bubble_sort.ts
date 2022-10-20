/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

const nums = [3, 1, 6, 10, 4, 7]

export const bubbleSort = (arr: number[]) => {
  // eslint-disable-next-line no-param-reassign
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        // eslint-disable-next-line no-param-reassign
        arr[j] = arr[j + 1]
        // eslint-disable-next-line no-param-reassign
        arr[j + 1] = temp
      }
    }
  }
}
bubbleSort(nums)
console.log(nums)
