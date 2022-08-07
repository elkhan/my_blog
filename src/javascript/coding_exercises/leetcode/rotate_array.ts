// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

export const rotateArray = (nums: number[], k: number) => {
  for (let i = 0; i < k; i += 1) {
    nums.unshift(nums.pop() as number)
  }
}

// TODO add more solutions
