const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const date = new Date()
const month = months[date.getMonth()]
const day = days[date.getDay()]
console.log(day)
console.log(date.getDate())
console.log(month)
console.log(date.getFullYear())
console.log(date)
