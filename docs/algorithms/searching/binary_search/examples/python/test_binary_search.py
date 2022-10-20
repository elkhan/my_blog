import unittest

from binary_search import *


def create_list(n):
    arr = []
    for i in range(1, n + 1):  # from 1 to n exclusive
        arr.append(i)
    return arr


class TestBinarySearch(unittest.TestCase):
    num_list = create_list(100)

    def test_binary_search(self):
        self.assertEqual(binary_search(self.num_list, 1), 0, "Should be 0")
        self.assertEqual(binary_search(self.num_list, 55), 54, "Should be 54")
        self.assertEqual(binary_search(self.num_list, 87), 86, "Should be 86")
        self.assertEqual(binary_search(self.num_list, -1), None, "Should be None")
        self.assertEqual(binary_search(self.num_list, 101), None, "Should be None")

    def test_binary_search_recursive_args(self):
        self.assertEqual(binary_search_recursive_args(self.num_list, 1), 0, "Should be 0")
        self.assertEqual(binary_search_recursive_args(self.num_list, 55), 54, "Should be 54")
        self.assertEqual(binary_search_recursive_args(self.num_list, 87), 86, "Should be 86")
        self.assertEqual(binary_search_recursive_args(self.num_list, -1), None, "Should be None")
        self.assertEqual(binary_search_recursive_args(self.num_list, 101), None, "Should be None")

    def test_binary_search_recursive(self):
        self.assertEqual(binary_search_recursive(self.num_list, 1), 0, "Should be 0")
        self.assertEqual(binary_search_recursive(self.num_list, 55), 54, "Should be 54")
        self.assertEqual(binary_search_recursive(self.num_list, 87), 86, "Should be 86")
        self.assertEqual(binary_search_recursive(self.num_list, -1), None, "Should be None")

    def test_recursive_binary_search(self):
        self.assertEqual(recursive_binary_search(self.num_list, 1), 0, "Should be 0")
        self.assertEqual(recursive_binary_search(self.num_list, 55), 54, "Should be 54")
        self.assertEqual(recursive_binary_search(self.num_list, 87), 86, "Should be 86")
        self.assertEqual(recursive_binary_search(self.num_list, -1), None, "Should be None")
        self.assertEqual(recursive_binary_search(self.num_list, 101), None, "Should be None")


if __name__ == "__main__":
    unittest.main()
