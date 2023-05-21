class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  prepend(value: T): void {
    const node = new Node(value)
    this.length += 1

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    node.next = this.head
    this.head = node
  }

  getLength(): number {
    return this.length
  }

  append(value: T): void {
    const node = new Node<T>(value)
    this.length += 1

    if (!this.tail) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  insertAt(value: T, index: number): void {
    if (index > this.length) {
      throw new Error('Can not insert here.')
    }
    if (index === this.length) {
      this.append(value)
      return
    }
    if (index === 0) {
      this.prepend(value)
      return
    }

    this.length += 1

    const previous = this.getAt(index - 1) as Node<T>
    if (!previous || !previous.next) {
      this.append(value)
      return
    }

    const newNode = new Node(value)
    newNode.next = previous.next
    previous.next = newNode
  }

  remove(value: T): T | null {
    let current = this.head
    for (let i = 0; current && i < this.length; i += 1) {
      if (current.value === value) {
        break
      }
      current = current.next
    }
    if (!current) {
      return null
    }

    return this.removeNode(current)
  }

  removeAt(index: number): T | null {
    const node = this.getAt(index)

    if (!node) {
      return null
    }

    return this.removeNode(node)
  }

  get(index: number): T | null {
    return this.getAt(index)?.value || null
  }

  private getAt(index: number): Node<T> | null {
    let current = this.head
    for (let i = 0; current && i < index; i += 1) {
      current = current.next
    }
    return current
  }

  private removeNode(node: Node<T>): T | null {
    this.length -= 1

    if (this.length === 0) {
      const out = this.head!.value
      this.head = null
      this.tail = null
      return out
    }
    if (node === this.head) {
      this.head = node.next
    }

    // eslint-disable-next-line no-param-reassign
    node.next = null

    return node.value
  }
}

const lll = {
  head: {
    value: {
      title: 'Post 0'
    },
    next: {
      value: {
        title: 'Post between 0 and A'
      },
      next: {
        value: {
          title: 'Post A'
        },
        next: null
      }
    }
  },
  tail: {
    value: {
      title: 'Post A'
    },
    next: null
  },
  length: 3
}
/* 
const pp = {
  head: {
    value: {
      title: 'Post -1'
    },
    next: {
      value: {
        title: 'Post 0'
      },
      next: {
        value: {
          title: 'Post 1'
        },
        next: null
      }
    }
  },
  tail: { value: { title: 'Post 1' }, next: null },
  size: 3
}
 */

const A = new LinkedList()
A.append({ title: 'Post A' })
A.prepend({ title: 'Post 0' })
A.insertAt({ title: 'Post between 0 and A' }, 1)

const arrA = [A]

console.log(arrA[arrA.length - 1].head?.next)
