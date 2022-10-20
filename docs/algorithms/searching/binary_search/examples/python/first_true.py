"""
An array of boolean values is divided into two sections;
the left section consists of all false and the right section consists of all true.
Find the First True in a Sorted Boolean Array of the right section, i.e. the index of
the first true element. If there is no true element, return -1.

Input: arr = [false, false, true, true, true]

Output: 2

Explanation: first true's index is 2.

https://algo.monster/problems/binary_search_boundary
"""


def find_boundary(arr):
    start = 0
    end = len(arr) - 1
    curr = -1
    while start <= end:
        mid = (start + end) // 2
        if arr[mid]:
            curr = mid
            end = mid - 1
        else:
            start = mid + 1
    return curr
