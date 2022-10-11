function addLeadingZero(num) {
  return (num < 10 ? '0' : '') + num
}
expect(addLeadingZero(5)).to.eq('05')
expect(addLeadingZero(10)).to.eq('10')

function formatDate(userDate) {
  // format from M/D/YYYY to YYYY-MM-DD
  const d = new Date(userDate)
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = `${d.getFullYear()}`

  if (month.length < 2) {
    month = `0${month}`
  }
  if (day.length < 2) {
    day = `0${day}`
  }

  // TODO: Add validation if outside range

  return [year, month, day].join('-')
}

export default formatDate

expect(formatDate('12/31/2014')).to.eq('2014-12-31')
