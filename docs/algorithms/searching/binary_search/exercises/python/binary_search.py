# For a binary search to work a list must be sorted


def binary_search(arg: list, item: int):
    low = 0
    high = len(arg) - 1
    while low <= high:
        mid = low + high
        guess = arg[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None
