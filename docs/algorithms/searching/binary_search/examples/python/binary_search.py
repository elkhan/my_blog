# num = int(input('List length to search through? '))
# tg = int(input('What number to search for? '))

"""
def create_list(n):
    arr = []
    for i in range(1, n + 1):  # from 1 to n exclusive
        arr.append(i)
    return arr
"""


def create_list(n):
    return list(range(1, n + 1))


def binary_search(input_list, target):
    start = 0
    end = len(input_list) - 1
    while start <= end:
        middle = (start + end) // 2
        if input_list[middle] == target:
            return middle
        elif target > input_list[middle]:
            start = middle + 1
        else:
            end = middle - 1
    return None


# print('The index is {}'.format(binary_search(create_list(num), tg)))
