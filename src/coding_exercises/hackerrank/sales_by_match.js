// eslint-disable-next-line max-len
// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const { expect } = require('chai');

const socks = [1, 2, 1, 2, 1, 3, 2];
const num = 7;

const sockMerchant = (n, ar) => {
  const map = new Map();
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    if (map.has(ar[i])) {
      const count = map.get(ar[i]) + 1;
      map.set(ar[i], count);
      if (map.get(ar[i]) % 2 === 0) {
        pairs += 1;
      }
    } else {
      map.set(ar[i], 1);
    }
  }
  return pairs;
};

const moreSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

expect(sockMerchant(num, socks)).to.equal(2);
expect(sockMerchant(moreSocks.length, moreSocks)).to.equal(3);

// eslint-disable-next-line no-extend-native
Array.prototype.count = function (value) {
  let count = 0;
  this.forEach((item) => {
    if (item === value) {
      count++;
    }
  });

  return count;
};

const sockMerchantSet = (n, ar) => {
  let pairs = 0;
  const socksSet = new Set(ar);
  socksSet.forEach((item) => {
    if (item) {
      pairs += Math.floor(ar.count(item) / 2);
    }
  });
  return pairs;
};

expect(sockMerchantSet(num, socks)).to.equal(2);
expect(sockMerchantSet(moreSocks.length, moreSocks)).to.equal(3);
