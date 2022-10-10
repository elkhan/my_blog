import unittest

from naive import naive


class TestNaiveMultiplication(unittest.TestCase):
    def test_naive(self):
        self.assertEqual(naive(3, 5), 15, "Should be 15")


if __name__ == "__main__":
    unittest.main()
