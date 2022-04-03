function morning(name) {
  return `Good morning! ${name.toUpperCase()}`
}

function greet(name, cb) {
  const myName = "kaushik"
  console.log(`Hello ${cb(name)}!, My name is ${myName}`)
}

greet("madhura", morning)
greet("yuki", morning)
