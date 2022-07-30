from numpy import binary_repr


# https://classroom.udacity.com/courses/cs215/lessons/48747095/concepts/487244120923
# https://www.cut-the-knot.org/Curriculum/Algebra/PeasantMultiplication.shtml
def peasant(a, b):
    x = a
    y = b
    z = 0
    while x > 0:
        if x % 2 == 1:
            z = z + y
        y = y << 1  # it doubles the number. If odd it first subtracts one and then halves
        x = x >> 1  # it halves. If odd it first subtracts one and then halves
    return z


assert peasant(5, 4) == 20

assert binary_repr(17) == '10001'
assert binary_repr(17 >> 1) == '1000'  # 8 Halves the number. If odd it first subtracts one and then halves
assert binary_repr(16 >> 1) == '1000'  # 8
assert binary_repr(17 >> 2) == '100'  # 4
assert binary_repr(17 >> 3) == '10'  # 2

assert binary_repr(2 << 1) == '100'  # 4
assert binary_repr(2 << 2) == '1000'  # 8
assert binary_repr(2 << 3) == '10000'  # 16

assert (17).bit_length() == 5
assert (4).bit_length() == 3

print(peasant(85, 18))
