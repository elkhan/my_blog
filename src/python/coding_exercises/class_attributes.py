class Pet:
    kind = "mammal"
    n_pets = 0  # number of pets
    pet_names = []  # list of names of all pets

    def __init__(self, spec, name):
        self.spec = spec
        self.name = name
        self.legs = 4


tom = Pet("cat", "Tom")
avocado = Pet("dog", "Avocado")
ben = Pet("goldfish", "Benjamin")

tom.n_pets = 1  # Immutable data type
tom.color = "white"

# print(tom.__dict__)
# Pet.n_pets += 3
print(tom.n_pets)
print(avocado.n_pets)
print(ben.n_pets)

tom.pet_names.append(
    tom.name
)  # Mutating a list affects all instances - the same list object for all instances
print(tom.pet_names)
print(avocado.pet_names)
print(ben.pet_names)


class City:
    all_cities = []

    def __init__(self, name, year):
        self.name = name
        self.year = year


ny = City("New York", 1624)
ny.all_cities.append("New York")

stockholm = City("Stockholm", 1187)
stockholm.all_cities = ["Stockholm"]

print(City.all_cities)
print(stockholm.__dict__)  # {'name': 'Stockholm', 'year': 1187, 'all_cities': ['Stockholm']}
print(ny.__dict__)  # {'name': 'New York', 'year': 1624}
