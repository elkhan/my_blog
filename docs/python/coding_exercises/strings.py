# user_input = 'LowerCamelCase'
# new_string = ''
#
# for index, letter in enumerate(user_input):
#     if not letter.islower() and index != 0:
#         new_string += '_'
#         new_string += letter.lower()
#     else:
#         new_string += letter.lower()
#
# print(new_string)

hello = "hello_world"
print(hello.split())

world = "Process integer input"
hello_world = world.replace(" ", "_").lower()
print(hello_world)
