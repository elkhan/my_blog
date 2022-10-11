# bestTimeToBuyAndSellStock

[Leetcode - Array](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564)

```js
const buckAndDays = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let result = 0;
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] < prices[i + 1]) {
      result += prices[i + 1] - prices[i];
    }
  }
  return result;
};
```
