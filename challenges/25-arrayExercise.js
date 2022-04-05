console.log(students)

sayName(students[0])

const updatedStudents = students.map(function (student) {
  return {
    ...student,
    role: "student",
  }
})

// console.log(updatedStudents)

const highScores = students.filter(function (student) {
  return student.score > 80
})

// console.log(highScores)

// difference in the find and filter method is that the find method returns the first element that matches the condition whereas the filter method returns an array of all the elements that match the condition.

const specificId = students.find(function (student) {
  return student.id === 2
})
// console.log(
//   "🚀 ~ file: 25-arrayExercise.js ~ line 25 ~ specificId ~ specificId",
//   specificId
// )

// reduce method is used to reduce the array to a single value.

const averageScore =
  students.reduce(function (acc, student) {
    return acc + student.score
  }, 0) / students.length

// console.log(
//   "🚀 ~ file: 25-arrayExercise.js ~ line 33 ~ averageScore",
//   averageScore
// )

// Example for reduce method:
// Counting the number of times favorite subjects are repeated

const survey = students.reduce(function (survey, student) {
  const favSubject = student.favouriteSubject
  if (survey[favSubject]) {
    survey[favSubject]++
  } else {
    survey[favSubject] = 1
  }
  return survey
}, {})
console.log(
  "🚀 ~ file: 25-arrayExercise.js ~ line 47 ~ survey ~ survey",
  survey
)
