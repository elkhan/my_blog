def parity(x):
    if x % 2 == 0:
        return x
    print("What's up")
    return "Hello"


parity_val = parity(10)

assert parity_val == 10
