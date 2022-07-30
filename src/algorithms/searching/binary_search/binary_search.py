import math

num = 240000

assert math.ceil(math.log(num, 2)) == 18

# For a binary search to work a list must be sorted
num_list = [1, 2, 3, 4, 5, 6, 7, 8]
another_list = [1, 3, 5, 7, 9]


def binary_search(arg: list, item: int):
    low = 0
    high = len(arg) - 1
    while low <= high:
        mid = (low + high)
        guess = arg[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


print(binary_search(num_list, 4))
print(binary_search(another_list, 3))
print(binary_search(another_list, -1))
