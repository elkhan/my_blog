// https://www.robinwieruch.de/javascript-closure

function getEmployeeFactory() {
  let employeeNumber = 1
  return (name, country) => ({ employeeNumber: employeeNumber++, name, country })
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
