const names = ["Tyler", "Cahlan", "Ryan", "Colt", "Tyler", "Blaine", "Cahlan"]
const lastNames = "Bartlett"
let newNames = []

for (let i = 0; i < names.length; i++) {
  let name = names[i] + " " + lastNames
  newNames.push(name)
  console.log(name)
}
