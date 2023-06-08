//Exercise level 3
const personAccount = {
    firstName: 'Jagannath',
    lastName: 'Samantra',
    incomes: {
        Employee: 12000,
        Internship: 10000
    },
    expenses: {
        food: 5000,
        rent: 3000,
        travel: 2000
    },
    totalIncome: function () {
        let tot = 0
        let values = Object.values(this.incomes)
        for (const income of values) {
            tot += income
        }
        return tot;

    },
    totalExpense: function () {
        let tot = 0
        let values = Object.values(this.expenses)
        for (const expense of values) {
            tot += expense
        }
        return tot;
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense()
    },
    addIncome: function () {
        Object.assign(this.incomes, { bloggin: 7000 })
        return this.incomes
    },
    addExpenses: function () {
        Object.assign(this.expenses, { shopping: 3000 })
        return this.expenses
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName} Your total account balance is ${this.accountBalance()}  `
    }
}

console.log(personAccount.incomes)
console.log(personAccount.expenses)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())
console.log(personAccount.accountInfo())
console.log(personAccount.addIncome())
console.log(personAccount.addExpenses())
//now after adding Income and expenses our results will be different
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())
console.log(personAccount.accountInfo())

const Users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


const signup = (username1, password1, mail) => {
    let flag = 0
    for (let i = 0; i < Users.length; i++) {

        if (Users[i].username == username1 && Users[i].password == password1) {
            return 'These username already has an account'
        }
        flag++
    }
    if (flag == Users.length) {
        const now = new Date()
        let _id = []
        while (_id.length < 6) {
            let char = 'abcdefghijklmnopqrstuvwxyz'
            _id.push(char[Math.floor(Math.random() * char.length)])
        }
        console.log('This is your generated ID ' + _id.join(""))
        Users.push({
            id: _id.join(""),
            username: username1,
            email: mail,
            password: password1,
            createdAt: `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`,
            isLoggedIn: false
        })
    }
}

const singin = (username, password) => {
    let flag = 0
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].username.toLowerCase() == username.toLowerCase() && Users[i].password == password) {
            return Users[i]
        }
        flag++
    }
    if (flag == Users.length) {
        return "Wrong username or password"
    }

}

console.log(Users)
signup('Jags', '836919', 'btwitsjagannath12@gmail.com')
console.log(Users) //now you can see this usernmae in Users array

console.log(singin('Jags', '836919'))

//Q3
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

const rateProduct = (name, rate) => {
    let flag = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(name)) {
            let id = []
            while (id.length < 6) {
                let char = 'abcdefghijklmnopqrstuvwxyz'
                id.push(char[Math.floor(Math.random() * char.length)])
            }
            products[i].ratings.push({
                userId: id.join(""),
                rate: rate
            }
            )
            break;
        }
        flag++
    }
    if (flag == products.length) {
        return 'No product to rate'
    }
}
rateProduct('Laptop', 9)
console.log(products)

const avgRating = (name) => {
    let flag = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(name)) {
            let count = 0, avg = 0
            for (let j = 0; j < products[i].ratings.length; j++) {
                count++
                avg += products[i].ratings[j].rate
            }

            avg = avg / count
            return avg
        }
        flag++
        if (flag == products.length) {
            return `No product for average rating`
        }
    }
}

console.log(avgRating('mobile phone'))

//Q4

const likearr = []
const likeProduct = (name) => {
    let flag = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(name)) {
            const like = prompt('Do you want to like or unlike this product? \n Press 1 to like \n Press -1 to unlike ')
            if (like == '1') {
                if (likearr.indexOf('1') != -1) {
                    return 'You have already liked it no need to like it again'
                }
                else {
                    likearr.push('1')
                    return 'Liked Succesfully'
                }
            }
            else if (like == '-1') {
                if (likearr.indexOf('1') != -1) {
                    likearr.pop()
                    return 'Unliked Successfully'
                }
                else {
                    return 'You havent liked it yet so you cant unlike it first like it '
                }
            }
            else {
                like = prompt('You have entered wrong Number \n Kindly enter again n Press 1 to like \n Press -1 to unlike')
            }
        }
        flag++
    }
    if (flag == products.length) {
        return 'There is no product of this name'
    }

}

console.log(likeProduct('Lap-1top'))
console.log(likearr)
console.log(likeProduct('Laptop'))
console.log(likearr)
// if  you will give the input here as 1 it'll show the message that we have already liked it
//if we'll provide -1 here it'll unlikeit
//you can check the array value at every point you'll understand clearly
console.log(likeProduct('Laptop'))
//After unliking it if we'll again give the input as -1 so the msg will be shown that we havent liked yet
