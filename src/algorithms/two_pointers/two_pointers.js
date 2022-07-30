// https://algodaily.com/lessons/using-the-two-pointer-technique

// Find sum

const sum = 6;
const arr = [1, 2, 3, 4, 5, 6, 7];

const findSum = (nums, target) => {
  // Pointers
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const result = nums[low] + nums[high];
    if (result === target) {
      return [target, nums[low], nums[high]];
    } else if (result < target) {
      low++;
    } else {
      high--;
    }
  }
  return false;
};

console.log(findSum(arr, sum));
