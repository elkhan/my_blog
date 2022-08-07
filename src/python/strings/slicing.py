mystring = "abcdefghijk"
assert mystring[2:] == "cdefghijk"
assert mystring[2:5] == "cde"
assert mystring[::] == mystring
assert mystring[::2] == "acegik"
assert mystring[2:7:2] == "ceg"
assert mystring[::-1] == "kjihgfedcba"


def from_two_to_end(str_input):
    return str_input[2:]


def from_2_to_five(str_input):
    return str_input[2:5]


def get_all_chars(str_input):
    return str_input[::]


def get_all_in_two_steps(str_input):
    return str_input[::2]


def from_two_to_seven_in_two(str_input):
    return str_input[2:7:2]


def reverse_string(str_input):
    return str_input[::-1]
