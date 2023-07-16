# https://realpython.com/working-with-files-in-python/
import os

assert os.listdir("io") == ["io_basics.py", "tests", "myfile.txt"]

assert os.getcwd() == "/Users/elkhan.mamedov/Learning/learning-python"
my_file = open("/Users/elkhan.mamedov/Learning/learning-python/io/myfile.txt", "r")
print(my_file.read())
