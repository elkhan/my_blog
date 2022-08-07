import unittest

from ..indexing import char_at_zero, char_at_eight, reverse_indexing


class TestCharAtZero(unittest.TestCase):
    my_string = "Hello World"

    def test_char_at_zero(self):
        result = char_at_zero(self.my_string)
        self.assertEqual(result, "H", "Should be H")
        self.assertNotEqual(result, "h", "Should not be h")

    def test_char_at_eight(self):
        result = char_at_eight(self.my_string)
        self.assertEqual(result, "r", "Should be r")
        self.assertNotEqual(result, "R", "Should not be R")

    def test_reverse_indexing(self):
        result = reverse_indexing(self.my_string)
        self.assertEqual(result, "o", "Should be o")
        self.assertNotEqual(result, "O", "Should not be O")


if __name__ == "__main__":
    unittest.main()
