my_set = set()
my_set.add(1)
assert my_set == {1}

my_set.add(2)
assert my_set == {1, 2}

my_set.add(2)
# only unique values
assert my_set == {1, 2}

my_list = [1, 2, 3, 4, 1, 1, 1]
new_set = set(my_list)
assert new_set == {1, 2, 3, 4}

my_str = "Mississippi"
# sets are unordered
assert set(my_str) == {"s", "M", "i", "p"}
