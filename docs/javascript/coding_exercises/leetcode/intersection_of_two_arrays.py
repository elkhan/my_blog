from collections import Counter

arr1 = [1, 2, 2, 1]
arr2 = [2, 2]
arr3 = [4, 9, 5]
arr4 = [9, 4, 9, 8, 4]
arr5 = [1]
arr6 = [1]
arr7 = [1]
arr8 = [1, 1]
arr9 = [1, 2]
arr10 = [1, 1]
arr11 = [1, 2, 2, 1]
arr12 = [2]
arr13 = [1, 2, 2, 1]
arr14 = [1, 2]


def intersect(nums1, nums2):
    Counter(nums1)
    Counter(nums2)
    c = Counter(nums1) & Counter(nums2)
    return list(c.elements())


assert intersect(arr1, arr2) == [2, 2]
assert intersect(arr3, arr4) == [4, 9]
assert intersect(arr5, arr6) == [1]
assert intersect(arr7, arr8) == [1]
assert intersect(arr9, arr10) == [1]
assert intersect(arr11, arr12) == [2]
assert intersect(arr13, arr14) == [1, 2]
