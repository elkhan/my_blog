names_list = []
while True:
    names = input()
    if names != ".":
        names_list.append(names)
    else:
        print(names_list)
        print(len(names_list))
        break
