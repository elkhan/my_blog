// eslint-disable-next-line max-len
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

const { expect } = require('chai');

// eslint-disable-next-line require-jsdoc
function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    object[id][prop] = value;
  } else if (prop === 'tracks' && object[id]['tracks'] === undefined) {
    object[id]['tracks'] = [];
    object[id]['tracks'].push(value);
  } else if (prop === 'tracks' && value !== '') {
    object[id]['tracks'].push(value);
  } else if (value === '') {
    delete object[id][prop];
  }
  return object;
}

const collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

expect(updateRecords(collection, 5439, 'artist', 'ABBA')).to.deep.equal(collection);
expect(updateRecords(collection, 5439, 'tracks', 'Take a Chance on Me')).to.deep.equal(collection);
expect(updateRecords(collection, 2548, 'artist', '')).to.deep.equal(collection);
expect(updateRecords(collection, 2548, 'tracks', '')).to.deep.equal(collection);
