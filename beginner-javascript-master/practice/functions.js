
    // const p = document.querySelector('#para1');
    // const c = document.querySelector('.classy');
    // console.log(p)
    // console.log(c)

function result(price,qty) {
    const total = price*qty
    return total
}

// const myTotal = result(25,2)
console.log(result(50,5));


const total = (a,b=3) => a+b
console.log(total(5));