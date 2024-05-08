import unittest

def sum(a, b):
  """Returns the sum of two numbers."""
  return a + b

class TestSum(unittest.TestCase):
  def test_sum_positive_numbers(self):
    result = sum(2, 3)
    self.assertEqual(result, 5)

  def test_sum_negative_numbers(self):
    result = sum(-2, -3)
    self.assertEqual(result, -5)

if __name__ == "__main__":
  unittest.main()