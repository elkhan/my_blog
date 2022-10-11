import { updateRecords } from './object_props'

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
}

describe('updateRecords', () => {
  it('should updateRecords records collection', () => {
    expect(updateRecords(collection, 5439, 'artist', 'ABBA')).toEqual(collection)
    expect(updateRecords(collection, 5439, 'tracks', 'Take a Chance on Me')).toEqual(collection)
    expect(updateRecords(collection, 2548, 'artist', '')).toEqual(collection)
    expect(updateRecords(collection, 2548, 'tracks', '')).toEqual(collection)

    expect(collection).toEqual({
      1245: {
        artist: 'Robert Palmer',
        tracks: [],
      },
      2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette'],
      },
      2548: {
        albumTitle: 'Slippery When Wet',
      },
      5439: {
        albumTitle: 'ABBA Gold',
        artist: 'ABBA',
        tracks: ['Take a Chance on Me'],
      },
    })
  })
})
