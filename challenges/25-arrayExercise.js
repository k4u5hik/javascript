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
