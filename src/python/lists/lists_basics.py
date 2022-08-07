my_list = ["one", "two", "three", 4, 5]

assert len(my_list) == 5
assert my_list[1] == "two"
assert my_list[1:] == ["two", "three", 4, 5]

another_list = ["six", "seven"]

new_list = my_list + another_list
assert new_list == ["one", "two", "three", 4, 5, "six", "seven"]

# Lists are mutable unlike strings
new_list[0] = "ONE"
assert new_list == ["ONE", "two", "three", 4, 5, "six", "seven"]

up_one = new_list[0].upper()
new_list[0] = up_one
assert new_list == ["ONE", "two", "three", 4, 5, "six", "seven"]

new_list.append("eight")
assert new_list == ["ONE", "two", "three", 4, 5, "six", "seven", "eight"]

# pop from the end
popped_elem = new_list.pop()
assert new_list == ["ONE", "two", "three", 4, 5, "six", "seven"]
assert popped_elem == "eight"

# remove at specific index
popped_at_two = new_list.pop(2)
assert new_list == ["ONE", "two", 4, 5, "six", "seven"]
assert popped_at_two == "three"
n = new_list[:]
assert n == new_list
assert n is not new_list  # referential equality

# revers a list
assert new_list[::-1] == ["seven", "six", 5, 4, "two", "ONE"]
assert new_list == ["ONE", "two", 4, 5, "six", "seven"]

# sort a list
num_list = [2, 5, 7, 1, 10]
num_list.sort()
assert num_list == [1, 2, 5, 7, 10]

# reverse a list
num_list.reverse()
assert num_list == [10, 7, 5, 2, 1]
