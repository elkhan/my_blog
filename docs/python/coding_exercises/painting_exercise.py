class Painting:
    museum = "Louvre"

    def __init__(self, title, painter, year):
        self.title = title
        self.painter = painter
        self.year = year

    def painting_output(self):
        print(f'"{self.title}" by {self.painter} ({self.year}) hangs in the {Painting.museum}.')


title_input = input()
painter_input = input()
year_input = int(input())

painting = Painting(title_input, painter_input, year_input)
painting.painting_output()
