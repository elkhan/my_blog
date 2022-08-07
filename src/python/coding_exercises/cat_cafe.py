cats_names = []
cats_number = []
while True:
    str_input = input()
    if str_input == "MEOW":
        break
    cats_names.append(str_input.split()[0])
    cats_number.append(int(str_input.split()[1]))

index_ = cats_number.index(max(cats_number))
print(cats_names[index_])
