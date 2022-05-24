console.log('it works')

const b1 = document.querySelector('.button1')

b1.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('button 1 clicked')
    }
)
