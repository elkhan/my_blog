# number = 0
# while number < 5:
#     print(number)
#     number += 1
#
# print("This is a number:", number)

# initial_deposit = int(input())
# years = 0
# while initial_deposit <= 700000:
#     years += 1
#     # initial_deposit += initial_deposit * 0.071
#     initial_deposit *= 1.071
#
# print(years)

# i = 1
# while i <= 20:
#     print(i * i)
#     i += 1

# i = 0
# while i < 5:
#     print('*')
#     if i % 2 == 0:
#         print('**')
#     if i > 2:
#         print('***')
#     i = i + 1
k = 18
# i = 0
# sum_i = 0
# while i < k:
#     i += 1
#     sum_i += i
#
# print(sum_i)

# sum_i = (k * (k + 1)) // 2
# print(sum_i)

# user_input = 3
# factorial = 1
# while user_input > 0:
#     factorial *= user_input
#     user_input -= 1
#
# print(factorial)

# limit = 25
# numbers = []
# while len(numbers) < 5:
#     for i in range(limit):
#         if i % 3 != 0:
#             continue
#         else:
#             numbers.append(i)
#
# print(len(numbers))

# pets = ['dog', 'cat', 'parrot']
# for pet in pets:
#     print(pet)
#     if pet == 'cat':
#         break

# input_string = "som egibberish"
# vowels = "aeiou"
# for i in input_string:
#     if i in vowels:
#         print("vowel")
#     elif not i.isalpha():
#         break
#     else:
#         print("consonant")

# for i in range(10):
#     line = ""
#     for j in range(10):
#         if i == j:
#             break
#         line += "{} ".format(j)
#     print(line)

# counter = 0
# max_value = 0
# while counter < 10:
#     counter = counter + 1
#     max_value = max_value + counter
#     if max_value > 15:
#         break
#     counter = counter + 1
# print(counter)
# print(max_value)

user_input = "aaaaabbbbaa"
# rev_user_input = user_input[::-1]
#
# if user_input == rev_user_input:
#     print("Palindrome")
# else:
#     print("Not palindrome")

# palindrome = True
# i = len(user_input) - 1
# j = 0
# while i > -1:
#     if user_input[i] == user_input[j]:
#         i = i - 1
#         j += 1
#     else:
#         palindrome = False
#         break
# if not palindrome:
#     print("Not palindrome")
# else:
#     print("Palindrome")
