# Write your code here
BUY = "buy"
FILL = "fill"
TAKE = "take"
REMAINING = "remaining"
EXIT = "exit"

water = 400
milk = 540
coffee_beans = 120
cups = 9
money = 550


def make_cappuccino():
    global water
    global milk
    global coffee_beans
    global money
    global cups
    if water >= 200 and milk >= 100 and coffee_beans >= 12 and cups >= 1:
        water -= 200
        milk -= 100
        coffee_beans -= 12
        money += 6
        cups -= 1
        print("I have enough resources, making you a coffee!")
    elif water < 200:
        print("Sorry, not enough water!")


def make_espresso():
    global water
    global coffee_beans
    global money
    global cups
    if water >= 250 and coffee_beans >= 16 and cups >= 1:
        water -= 250
        coffee_beans -= 16
        money += 4
        cups -= 1
        print("I have enough resources, making you a coffee!")
    elif water < 250:
        print("Sorry, not enough water!")


def make_latte():
    global water
    global milk
    global coffee_beans
    global money
    global cups
    if water >= 350 and milk >= 75 and coffee_beans >= 20 and cups >= 1:
        water -= 350
        milk -= 75
        coffee_beans -= 20
        money += 7
        cups -= 1
        print("I have enough resources, making you a coffee!")
    elif water < 350:
        print("Sorry, not enough water!")


def display(wat, mil, beans, cup, mon):
    print(
        "The coffee machine has: \n"
        + str(wat)
        + " of water\n"
        + str(mil)
        + " of milk\n"
        + str(beans)
        + " of coffee beans\n"
        + str(cup)
        + " of disposable cups\n"
        + str(mon)
        + " of money\n"
    )


while True:
    user_action_choice = input("What would you like to do: ")
    if user_action_choice == BUY:
        user_coffee_choice = input(
            "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: "
        )
        if user_coffee_choice == str(1):
            make_espresso()
        elif user_coffee_choice == str(2):
            make_latte()
        elif user_coffee_choice == str(3):
            make_cappuccino()
        elif user_coffee_choice == "back":
            continue

    elif user_action_choice == FILL:
        water = water + int(input("Write how many ml of water do you want to add: "))
        milk = milk + int(input("Write how many ml of milk do you want to add: "))
        coffee_beans = coffee_beans + int(
            input("Write how many grams of coffee beans do you want to add: ")
        )
        cups = cups + int(input("Write how many disposable cups of coffee do you want to add: "))
    elif user_action_choice == TAKE:
        print("I gave you " + str(money))
        money = 0
    elif user_action_choice == REMAINING:
        display(water, milk, coffee_beans, cups, money)
    elif user_action_choice == EXIT:
        break
