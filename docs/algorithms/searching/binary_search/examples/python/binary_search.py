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


"""
Recursive Binary search
"""


def binary_search_recursive(input_list, target):
    middle = len(input_list) // 2

    if target == input_list[middle]:
        return middle

    if middle == 0:
        return None

    if target > input_list[middle]:
        index = binary_search_recursive(input_list[middle + 1:], target)
        return index + middle + 1 if index is not None else None

    return binary_search_recursive(input_list[:middle], target)


def binary_search_recursive_args(input_list, target, start=0, end=None):
    if end is None:
        end = len(input_list) - 1

    if start > end:
        return None

    middle = (start + end) // 2

    if target == input_list[middle]:
        return middle

    if target > input_list[middle]:
        return binary_search_recursive_args(input_list, target, middle + 1, end)

    return binary_search_recursive_args(input_list, target, start, middle - 1)


# https://stackoverflow.com/a/57515486
def recursive_binary_search(arr, target):
    middle = len(arr) // 2
    if len(arr) == 1:
        return middle if arr[middle] == target else None
    elif arr[middle] == target:
        return middle
    else:
        if target > arr[middle]:
            index = recursive_binary_search((arr[middle:]), target)
            return middle + index if index is not None else None
        else:
            return recursive_binary_search((arr[:middle]), target)

