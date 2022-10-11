// https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
/*
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
const example = new Date(2017, 3, 22, 5, 23, 50) // 2017-04-22T03:23:50.000Z
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
// https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
const date = new Date()
const today = days[date.getDay()]
const hours = date.getHours() % 12
const minutes = date.getMinutes()
const seconds = date.getSeconds()
console.log(`Today is : ${today}`)
console.log(`Current time is : ${hours} PM : ${minutes} : ${seconds}`)

export {}
