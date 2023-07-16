sum_nums = []
sum_squares = []
while True:
    num_input = int(input())
    sum_nums.append(num_input)
    sum_squares.append(num_input * num_input)
    total = sum(sum_squares)
    if sum(sum_nums) == 0:
        print(total)
        break
