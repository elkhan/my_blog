// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

export const updateRecords = (
  object: {
    [x: string]: { [x: string]: any }
  },
  id: number,
  prop: string,
  value: string
) => {
  if (prop !== 'tracks' && value !== '') {
    // eslint-disable-next-line no-param-reassign
    object[id][prop] = value
    //
    //  @ts-ignore
  } else if (prop === 'tracks' && object[id].tracks === undefined) {
    // eslint-disable-next-line no-param-reassign,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    object[id].tracks = []
    //
    // @ts-ignore
    object[id].tracks.push(value)
  } else if (prop === 'tracks' && value !== '') {
    //
    // @ts-ignore
    object[id].tracks.push(value)
  } else if (value === '') {
    // eslint-disable-next-line no-param-reassign
    delete object[id][prop]
  }
  return object
}
