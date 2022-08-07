class Student:
    def __init__(self, name, last_name, birth_year):
        self.name = name
        self.last_name = last_name
        self.birth_year = birth_year
        self.student_id = name[0] + last_name + birth_year


f_name = input()
l_name = input()
b_year = input()

student = Student(f_name, l_name, b_year)
student2 = Student(f_name, l_name, b_year)
print(student.student_id)
print(student2.student_id)
