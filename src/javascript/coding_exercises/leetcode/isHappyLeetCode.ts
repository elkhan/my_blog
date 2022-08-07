// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3284/
// https://leetcode.com/problems/happy-number/discuss/?currentPage=1&orderBy=hot&query=
// Explanation https://www.youtube.com/watch?v=7MxsSxp-8YA
const isHappy = n => {
  const tempResults = Array.from(n.toString()).map(Number)
  const tempArr = []
  const tempFun = nums => {
    let result = 0
    nums.forEach(item => {
      result += item ** 2
    })

    if (result === 1) {
      return true
    }
    if (tempArr.includes(result)) {
      // Cycle
      return false
    }
    tempArr.push(result)
    const results = Array.from(result.toString()).map(Number)
    return tempFun(results)
  }
  return tempFun(tempResults)
}

// const n = 1234567
// prettier-ignore
// eslint-disable-next-line prefer-template,no-unused-vars
// const digits = (''+n).split('')
// eslint-disable-next-line prefer-template,no-unused-vars
// console.log((''+n).split('').map(Number))
// console.log(Array.from(n.toString()).map(Number))

const num = 19
const result = isHappy(num)
console.log(result)

/*
https://leetcode.com/problems/happy-number/discuss/56956/My-straightforward-solution-in-JS/176850/
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

 */

/*
https://leetcode.com/problems/happy-number/discuss/562199/Javascript-Beats-99

var isHappy = function(n) {
    if (n === 1 || n === 7) return true;
    while (n >= 9) {
        let x = n;
        let sum = 0;
        while(x > 0) {
            sum += Math.pow(x%10, 2);
            x = Math.floor(x/10);
        }

        if (sum === 1 || sum === 7) return true;
        n = sum;
    }
    return false
};
 */

/*
https://leetcode.com/problems/happy-number/discuss/560853/Javascript-1st-1-line-RecursiveFunctional-%2B-Explanation
var isHappy = (n, map = {}) => n == 1 ? true : map[n] ? false : isHappy([...n.toString()].reduce((sum, num) => map[n] = n && sum + num**2, 0), map)

var isHappy = (n, map = {}) => {
	if (n == 1) return true
	if (map[n]) return false
	map[n] = n
	return isHappy([...n.toString()].reduce((sum, num) => sum + num**2, 0), map)
}
 */
/*
https://leetcode.com/problems/happy-number/discuss/535908/javascript%3A-95faster-Floyd-algo
var isHappy = function(n) {
    function getNext(n){
        return (n+"").split("").reduce((a,c)=>Number(a)+Number(c*c), 0);
    }

    let slow = n;
    let fast = getNext(n);
    while(fast!=1 && slow!=fast){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
};
 */
/*
https://leetcode.com/problems/happy-number/discuss/512876/Simple-JS-Solution
var isHappy = function(n) {
    if (n <= 0) return false;
    let nextNum = n;
    let recordOfNum = [];

    while (!recordOfNum.includes(nextNum)) {
        recordOfNum.push(nextNum);
        let numArr = nextNum.toString().split("");
        nextNum = 0;
        for (let num of numArr) {
            nextNum += Number(num) * Number(num);
        }
        if (nextNum === 1) return true;
    }
    return false;
};
 */

console.log(82 % 10)
