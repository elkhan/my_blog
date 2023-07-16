class Puppy:
    n_puppies = 0  # number of created puppies

    def __new__(cls, *args, **kwargs):
        if cls.n_puppies < 3:
            cls.n_puppies += 1
            return object.__new__(cls)


puppy_one = Puppy()
puppy_two = Puppy()
puppy_three = Puppy()
puppy_four = Puppy()

print(puppy_one)
print(puppy_two)
print(puppy_three)
print(puppy_four)

"""
<__main__.Puppy object at 0x1103a2f10>
<__main__.Puppy object at 0x1103a2f70>
<__main__.Puppy object at 0x1103a2ee0>
None
"""
