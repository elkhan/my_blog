x = "global"


def outer():
    x = "outer local"

    def inner():
        x = "inner local"

        def func():
            x = "func local"
            print(x)

        func()

    inner()


outer()  # func local

# *****
y = 1


def modify_y():
    y = 10


print("y", y)  # y 1

# *****
name = "John"


def change_name(new_name):
    name = new_name


change_name("Mary")
print(name)
