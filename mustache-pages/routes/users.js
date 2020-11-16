const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {

    let user = {
        name: 'John Doe', 
        address: {
            street: '1200 Richmond',
            city: 'Houston',
            state: 'TX'
        }
    }

    res.render('index', user)
})

router.get('/add-user', (req, res) => {
    res.render('add-user')
})

router.post('add-user', (req, res) => {
    let name = req.body.name
    let age = req.body.age

    console.log(name, age)

    res.status(200).send()
})

router.get('/users', (req, res) => {
    let users = [
        {name: 'John', age: 34},
        {name: 'Mary  Doe', age: 28},
        {name: 'Alec Long', age: 42}
    ]

    res.render('users', {users: users})
})

module.exports  = router