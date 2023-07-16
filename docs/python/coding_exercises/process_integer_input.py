while True:
    num_input = int(input())
    if num_input < 10:
        continue
    elif num_input > 100:
        break
    else:
        print(num_input)
