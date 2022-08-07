class CoffeeMachine:
    def __init__(self):
        self.water = 400
        self.milk = 540
        self.coffee_beans = 120
        self.cups = 9
        self.money = 550

    def display(self):
        print(
            "The coffee machine has: \n"
            + str(self.water)
            + " of water\n"
            + str(self.milk)
            + " of milk\n"
            + str(self.coffee_beans)
            + " of coffee beans\n"
            + str(self.cups)
            + " of disposable cups\n"
            + str(self.money)
            + " of money\n"
        )

    def make_espresso(self):
        if self.water >= 250 and self.coffee_beans >= 16 and self.cups >= 1:
            self.water -= 250
            self.coffee_beans -= 16
            self.money += 4
            self.cups -= 1
            print("I have enough resources, making you a coffee!")
        elif self.water < 250:
            print("Sorry, not enough water!")

    def make_cappuccino(self):
        if self.water >= 200 and self.milk >= 100 and self.coffee_beans >= 12 and self.cups >= 1:
            self.water -= 200
            self.milk -= 100
            self.coffee_beans -= 12
            self.money += 6
            self.cups -= 1
            print("I have enough resources, making you a coffee!")
        elif self.water < 200:
            print("Sorry, not enough water!")

    def make_latte(self):
        if self.water >= 350 and self.milk >= 75 and self.coffee_beans >= 20 and self.cups >= 1:
            self.water -= 350
            self.milk -= 75
            self.coffee_beans -= 20
            self.money += 7
            self.cups -= 1
            print("I have enough resources, making you a coffee!")
        elif self.water < 350:
            print("Sorry, not enough water!")

    def take(self):
        print("I gave you " + str(self.money))
        self.money = 0

    def fill(self):
        self.water = self.water + int(input("Write how many ml of water do you want to add: "))
        self.milk = self.milk + int(input("Write how many ml of milk do you want to add: "))
        self.coffee_beans = self.coffee_beans + int(
            input("Write how many grams of coffee beans do you want to add: ")
        )
        self.cups = self.cups + int(
            input("Write how many disposable cups of coffee do you want to add: ")
        )

    def get_input(self, str_input):
        print("Write action (buy, fill, take, remaining, exit):")
        while True:
            if str_input == "remaining":
                return self.display()
            elif str_input == "buy":
                print(
                    "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:"
                )
                if str_input == str(1):
                    return self.make_espresso()
                elif str_input == str(2):
                    return self.make_cappuccino()
                elif str_input == str(3):
                    return self.make_latte()
                elif str_input == "back":
                    continue
            elif str_input == "fill":
                return self.fill()
            elif str_input == "take":
                return self.take()
            elif str_input == "exit":
                break


coffee_machine = CoffeeMachine()
coffee_machine.get_input(input())
