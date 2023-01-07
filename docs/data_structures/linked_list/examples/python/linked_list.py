import json


class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next  # May not need it


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def append(self, value):
        node = Node(value)
        self.size += 1

        if self.head is None:
            self.head = node
        else:
            self.tail.next = node

        self.tail = node

    def prepend(self, value):
        node = Node(value)
        self.size += 1

        if self.head is None:
            self.head = node
            self.tail = node
            return

        node.next = self.head
        self.head = node


ls = LinkedList()
ls.append({"title": "Post 0"})
ls.append({"title": "Post 1"})
print(json.dumps(ls, default=vars))
ls.prepend({"title": "Post -1"})
print(json.dumps(ls, default=vars))
