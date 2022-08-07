# Strings are immutable

name = "Sam"

last_letters = name[1:]
assert last_letters == "am"

assert f"P{last_letters}" == "Pam"

assert "Hello " + name == "Hello Sam"

split_name = [char for char in name]
print(split_name)
