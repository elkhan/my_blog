// eslint-disable-next-line max-len
// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const { expect } = require('chai');

const hike = 'UDDDUDUU';
const moreHikes = 'DUDDDUUDUU';

const countingValleys = (steps, path) => {
  const pathArr = path.split('');
  let ds = [];
  let ups = [];
  let result = 0;
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === 'D') {
      ds.push(pathArr[i]);
    } else {
      ups.push(pathArr[i]);
      if (ds.length === ups.length) {
        result += 1;
        ds = [];
        ups = [];
      }
    }
  }
  return result;
};

expect(countingValleys(null, hike)).to.equal(1);
expect(countingValleys(null, moreHikes)).to.equal(2);

const countingValleysAlt = (path) => {
  let seaLevel = 0;
  let valley = 0;
  // eslint-disable-next-line guard-for-in
  for (const step of path) {
    if (step === 'U') {
      seaLevel += 1;
    } else {
      seaLevel -= 1;
    }
    if (step === 'U' && seaLevel === 0) {
      valley += 1;
    }
  }
  return valley;
};

expect(countingValleysAlt(hike)).to.equal(1);
expect(countingValleysAlt(moreHikes)).to.equal(2);
