//Exercise: level 1
const firstPara = document.querySelector('p')
console.log(firstPara.textContent)

const firstparaid = document.querySelector('#second-para')
console.log(firstparaid.textContent)

const listsofp = document.querySelectorAll('p')
listsofp.forEach(tag => console.log(tag.textContent))

listsofp[3].textContent = 'Fourth Para'


listsofp[0].classList.add('firstclass')
listsofp[1].setAttribute('class', 'secondclass')
listsofp[2].className = 'thirdclass'
listsofp[3].setAttribute('id', 'fourth-para')
listsofp.forEach(tag => console.log(tag))

//Exercise : level 2

listsofp.forEach((tag) => {
    tag.style.backgroundColor = 'blue'
    tag.style.fontSize = '24px'
})

listsofp.forEach((tag, i) => {
    if (i % 2 == 0) {
        tag.style.color = 'green'
    }
    else {
        tag.style.color = 'red'
    }
})

