//Exercise :  level 1

localStorage.setItem('first name', 'Jagss')
localStorage.setItem('last name', 'Sam')
localStorage.setItem('age', 19)
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'Mumbai')


//Exercise : level 2
const student = {
    firstName: 'Jagss',
    lastName: 'Sam',
    age: 19,
    skills: [
        'HTML',
        'CSS',
        'JS'
    ],
    country: 'India'
}

const studentjson = JSON.stringify(student, undefined, 4)
localStorage.setItem('studentinfo', studentjson)

//Exercise :  level 3 is not based on local stoarges you can still practice that if you want to.

