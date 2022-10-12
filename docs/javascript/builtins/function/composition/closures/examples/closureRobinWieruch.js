// https://www.robinwieruch.de/javascript-closure

function getEmployeeFactory() {
  let employeeNumber = 1
  // eslint-disable-next-line no-return-assign
  return (name, country) => ({
    employeeNumber: (employeeNumber += 1),
    name,
    country
  })
}

const getEmployee = getEmployeeFactory()

const employeeOne = getEmployee('Robin', 'Germany')
const employeeTwo = getEmployee('Markus', 'Canada')

const employees = [employeeOne, employeeTwo]
console.dir(employees)
/*
[
  { employeeNumber: 1, name: 'Robin', country: 'Germany' },
  { employeeNumber: 2, name: 'Markus', country: 'Canada' }
]
 */
