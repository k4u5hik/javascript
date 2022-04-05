console.log(students)

sayName(students[0])

const updatedStudents = students.map(function (student) {
  return {
    ...student,
    role: "student",
  }
})

console.log(updatedStudents)

const highScores = students.filter(function (student) {
  return student.score > 80
})

console.log(highScores)

// difference in the find and filter method is that the find method returns the first element that matches the condition whereas the filter method returns an array of all the elements that match the condition.

const specificId = students.find(function (student) {
  return student.id === 2
})
console.log(
  "🚀 ~ file: 25-arrayExercise.js ~ line 25 ~ specificId ~ specificId",
  specificId
)
