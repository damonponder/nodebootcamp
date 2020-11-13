const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()
const mustache = require('mustache-express')

app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



app.get('/', (req, res) => {

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

app.get('/users', (req, res) => {
    let users = [
        {name: 'John', age: 34},
        {name: 'Mary  Doe', age: 28},
        {name: 'Alec Long', age: 42}
    ]

    res.render('users', {users: users})
})

app.listen(3000, () => {
    console.log("Server is running....")
})