import unittest

from ..slicing import *


class TestCharAtZero(unittest.TestCase):
    my_string = "abcdefghijk"

    def test_from_two_to_end(self):
        result = from_two_to_end(self.my_string)
        self.assertEqual(result, "cdefghijk")

    def test_from_2_to_five(self):
        result = from_2_to_five(self.my_string)
        self.assertEqual(result, "cde")

    def test_get_all_chars(self):
        result = get_all_chars(self.my_string)
        self.assertEqual(result, self.my_string)

    def test_get_all_in_two_steps(self):
        result = get_all_in_two_steps(self.my_string)
        self.assertEqual(result, "acegik")

    def test_from_two_to_seven_in_two(self):
        result = from_two_to_seven_in_two(self.my_string)
        self.assertEqual(result, "ceg")

    def test_reverse_string(self):
        result = reverse_string(self.my_string)
        self.assertEqual(result, "kjihgfedcba")


if __name__ == "__main__":
    unittest.main()
