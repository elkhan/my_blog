# for x in range(1, 4):
#     for y in range(-3, 0):
#         print(x * y)


# n = int(input())
# j = 0
# counter = 0
# for counter in range(n):
#     j += int(input())
#     counter += 1
#
# print(j / counter)
j = 0
counter = 0
for i in range(0, 3 + 1):
    if i % 3 == 0:
        j += i
        counter += 1

print(j / counter)
