// https://www.youtube.com/watch?v=_5X2aB_mNp4
const hero = {
  health: 100,
  backpack: ['carrots', 'beans'],
  weapon: 'sword',
}

const keys = Object.keys(hero)
const values = Object.values(hero)
console.log(keys) // [ 'health', 'backpack', 'weapon' ]
console.log(values) // [ 100, [ 'carrots', 'beans' ], 'sword' ]
