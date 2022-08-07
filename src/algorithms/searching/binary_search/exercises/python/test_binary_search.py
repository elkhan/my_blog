import unittest
from binary_search import binary_search


class TestBinarySearch(unittest.TestCase):
    num_list = [1, 2, 3, 4, 5, 6, 7, 8]

    def test_binary_search(self):
        self.assertEqual(binary_search(self.num_list, 1), 0, "Should be 0")
        self.assertEqual(binary_search(self.num_list, -1), None, "Should be None")
        self.assertEqual(binary_search(self.num_list, 9), None, "Should be None")


if __name__ == "__main__":
    unittest.main()
