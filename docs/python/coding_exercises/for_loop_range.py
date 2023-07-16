for i in range(1, 12, 3):
    pass
    # print(i)

string = ""
for i in range(1, 20, 4):
    string += "&" * i
    # print(len(string))

# print(string)

# for i in str(4901825):
#     print(i)

string = "red yellow fox bite orange goose beeeeeeeeeeep"
vowels = "aeiou"
j = 0
for i in string:
    for v in vowels:
        if i == v:
            j += 1

print(j)
