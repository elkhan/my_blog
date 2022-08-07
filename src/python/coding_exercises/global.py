x = 1


def print_global():
    print(x)


print_global()  # 1


def modify_global():
    global x
    x = x + 1
    print(x)


modify_global()
