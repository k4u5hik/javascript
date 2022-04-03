function morning() {
  console.log(`Good morning!`)
  return
}

function greet(name, callback) {
  const myName = "Kaushik"
  callback()
  console.log(`Hello ${name}!, My name is ${myName}`)
}

greet("Madhura", morning)
greet("Yuki", morning)
