name = "Sam"
# 1
split_name = [char for char in name]
assert split_name == ["S", "a", "m"]

# 2
list_split = list(name)
assert list_split == ["S", "a", "m"]

# 3
str_list = []

for letter in name:
    str_list.append(letter)

assert str_list == ["S", "a", "m"]

# 4
list_of_strings = []
for letter in range(0, len(name)):
    list_of_strings.append(name[letter])

assert list_of_strings == ["S", "a", "m"]

mystring = "The quick brown fox jumps over the lazy dog"
assert mystring.split(" ", maxsplit=2) == ["The", "quick", "brown fox jumps over the lazy dog"]
assert mystring.split("e", maxsplit=2) == ["Th", " quick brown fox jumps ov", "r the lazy dog"]
