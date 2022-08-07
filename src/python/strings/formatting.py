name = "Sam"

last_letters = name[1:]
assert last_letters == "am"

# string formatting https://realpython.com/python-string-formatting/
assert f"P{last_letters}" == "Pam"
assert "P{}".format(last_letters) == "Pam"
assert "P{last_letters}".format(last_letters=last_letters) == "Pam"
assert "P%s" % last_letters == "Pam"

# Format
assert "The {2} {1} {0}".format("fox", "brown", "quick") == "The quick brown fox"

assert "The {q} {b} {f}".format(f="fox", b="brown", q="quick") == "The quick brown fox"

# float formatting
result = 100 / 777
assert result == 0.1287001287001287
assert "The result was {r:1.3f}".format(r=result) == "The result was 0.129"
assert (
    "The result was {r:10.3f}".format(r=result) == "The result was      0.129"
)  # {value:width.precision f}

# f-strings
name = "Jose"
assert f"Hello, his name is {name}" == "Hello, his name is Jose"
