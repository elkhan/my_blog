import { LinkedList } from './linkedList'

describe('LinkedList', () => {
  const ls = new LinkedList()
  ls.append({ title: 'Post A' })
  ls.prepend({ title: 'Post 0' })
  ls.insertAt({ title: 'Post between 0 and A' }, 1)
  it('should append an item', () => {
    expect(ls.head?.value).toEqual({ title: 'Post 0' })
  })
  it('should prepend an item', () => {
    expect(ls.head?.next?.value).toEqual({ title: 'Post between 0 and A' })
    expect(ls.head?.next?.next?.value).toEqual({ title: 'Post A' })
  })

  it('should insertAt index', () => {
    expect(ls.head?.next?.value).toEqual({ title: 'Post between 0 and A' })
    console.log(JSON.stringify(ls, null, 2))
  })
  it('should return the length', () => {
    expect(ls.getLength()).toBe(3)
  })
})
