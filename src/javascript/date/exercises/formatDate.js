function formatDate(userDate) {
  // format from M/D/YYYY to YYYY-MM-DD
  const d = new Date(userDate)
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = d.getFullYear()

  if (month.length < 2) {
    month = `0${month}`
  }
  if (day.length < 2) {
    day = `0${day}`
  }

  return [year, month, day].join('-')
}

console.log(formatDate('12/31/2014')) // 2014-12-31
