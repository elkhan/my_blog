my_string = "Hello World"

assert my_string[0] == "H"
assert my_string[8] == "r"
assert my_string[-4] == "o"


def char_at_zero(input_str):
    return input_str[0]


def char_at_eight(input_str):
    return input_str[8]


def reverse_indexing(input_str):
    return input_str[-4]
