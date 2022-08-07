t = ("one", 2, 3)
my_list = ["one", 2, 3]

assert type(t) == tuple
assert type(my_list) == list

assert len(t) == 3

assert t[0] == "one"

# count()
another_t = (1, 1, 2)
assert t.count("one") == 1
assert another_t.count(1) == 2

# index()
assert another_t.index(1) == 0
assert another_t.index(2) == 2

# mutability of lists
my_list[0] = "five"
assert my_list == ["five", 2, 3]

# immutability of tuples
# t[0] = 'five' # TypeError: 'tuple' object does not support item assignment
