income = int(input())
tax = 25


def calculate_income_tax(inc, percent):
    return round((inc * percent) / 100) if percent != 0 else 0


if income <= 15527:
    tax = 0
    calculated_tax = calculate_income_tax(income, tax)
    print("The tax for {} is {}%. That is {} dollars!".format(income, tax, calculated_tax))
elif income <= 42707:
    tax = 15
    calculated_tax = calculate_income_tax(income, tax)
    print("The tax for {} is {}%. That is {} dollars!".format(income, tax, calculated_tax))
elif income <= 132406:
    tax = 25
    calculated_tax = calculate_income_tax(income, tax)
    print("The tax for {} is {}%. That is {} dollars!".format(income, tax, calculated_tax))
else:
    tax = 28
    calculated_tax = calculate_income_tax(income, tax)
    print("The tax for {} is {}%. That is {} dollars!".format(income, tax, calculated_tax))
