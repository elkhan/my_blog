x, y = 1, 2

print("x", x)
print("y", y)


def foo():
    global y
    if y == 2:
        x = 2
        y = 1


foo()
print(x)
if y == 1:
    x = 3
print(x)
