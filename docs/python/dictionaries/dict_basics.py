my_dict = {"key1": "value1", "key2": "value2"}
assert my_dict == {"key1": "value1", "key2": "value2"}

assert my_dict["key1"] == "value1"

prices_lookup = {"apple": 2.99, "oranges": 1.99, "milk": 5.80}
assert prices_lookup["apple"] == 2.99

another_dict = {"k1": 123, "k2": [0, 1, 2], "k3": {"insideKey": 100}}
assert another_dict["k3"] == {"insideKey": 100}
assert another_dict["k3"]["insideKey"] == 100
assert another_dict["k2"][2] == 2
another_dict["k4"] = ["a", "b", "c", "d"]
up_c = another_dict["k4"][2].upper()
assert another_dict == {
    "k1": 123,
    "k2": [0, 1, 2],
    "k3": {"insideKey": 100},
    "k4": ["a", "b", "c", "d"],
}
assert up_c == "C"
another_dict["k4"][2] = up_c
assert another_dict == {
    "k1": 123,
    "k2": [0, 1, 2],
    "k3": {"insideKey": 100},
    "k4": ["a", "b", "C", "d"],
}

# keys
another_dict.keys()
# dict_keys(['k1', 'k2', 'k3', 'k4'])

# values
another_dict.values()
# dict_values([123, [0, 1, 2], {'insideKey': 100}, ['a', 'b', 'C', 'd']])

# items
another_dict.items()
# dict_items([('k1', 123), ('k2', [0, 1, 2]), ('k3', {'insideKey': 100}), ('k4', ['a', 'b', 'C', 'd'])])

sample_dict = {
    "data": {
        "id": "1574083",
        "username": "snoopdogg",
        "full_name": "Snoop Dogg",
        "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg",
        "bio": "This is my bio",
        "website": "http://snoopdogg.com",
        "counts": {"media": 1320, "follows": 420, "followed_by": 3410},
    }
}
assert sample_dict["data"]["counts"]["media"] == 1320

# keys()
sample_dict_keys = list(sample_dict.keys())
assert list(sample_dict["data"].keys()) == [
    "id",
    "username",
    "full_name",
    "profile_picture",
    "bio",
    "website",
    "counts",
]

# values()
sample_dict_values = list(sample_dict["data"].values())
assert sample_dict_values == [
    "1574083",
    "snoopdogg",
    "Snoop Dogg",
    "http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg",
    "This is my bio",
    "http://snoopdogg.com",
    {"media": 1320, "follows": 420, "followed_by": 3410},
]

mydict = {"a": "hello", "b": "world"}

# keys()
for key in mydict.keys():
    val = mydict[key]
    # print("Key", key, 'points to', val)
    """
    Key a points to hello
    Key b points to world
    """

# items()
myitems = list(mydict.items())
assert myitems == [("a", "hello"), ("b", "world")]
assert myitems[0][0] == "a"
assert myitems[0][1] == "hello"

# tuple unpacking
for key, val in myitems:
    # print("Key", key, 'points to', val)
    """
    Key a points to hello
    Key b points to world
    """


for x in myitems:
    key = x[0]
    val = x[1]
    # print("Key", key, 'points to', val)
    """
    Key a points to hello
    Key b points to world
    """


# get
assert sample_dict.get("data") == sample_dict["data"]

names = [{"first": "Dan", "last": "Nguyen", "suffix": "III"}, {"first": "Jane"}]

for name in names:
    x = name.get("first")
    y = name.get("last")
    z = name.get("suffix")
    # print(x, y, z)
    """
    Dan Nguyen III
    Jane None None
    """

# setdefault()
for name in names:
    x = name.setdefault("first", "")
    y = name.setdefault("last", "Doe")
    z = name.setdefault("suffix", "")
    # print(x, y, z)
    """
    Dan Nguyen III
    Jane Doe 
    """

# update()
a = {"first": "Dan", "last": "Nguyen"}
b = {"last": "Smith", "suffix": "Jr."}
a.update(b)

# "last" got replaced
assert a == {"first": "Dan", "last": "Smith", "suffix": "Jr."}
