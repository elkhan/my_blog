scores = input().split()
wrong_answer = []
right_answer = []
for i in scores:
    if i == "I":
        wrong_answer.append(i)
        if len(wrong_answer) >= 3:
            print("Game over")
            print(len(right_answer))
            break
    else:
        right_answer.append(i)
else:
    print("You won")
    print(len(right_answer))
