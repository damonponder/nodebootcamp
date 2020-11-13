const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000


// //Setting up body parser to use JSON
// app.use(bodyParser.json())


// app.get('/', (req,res) => {
//     res.send("Hello Express")
// })

app.get('/movies',(req,res) =>{
    
    let movies = [
        {title: "Lord of the rings", year: 2014},
                  
        {title: "Spiderman", year: 2018},
                   
        {title: "Black Panther", title: 1997}
                 ]
    res.json(movies)
})

// app.post('/movies', (req, res) => {
//     const title = req.body.title
//     const year = req.body.year

//     console.log(title, year)
// })
// // movies/genre/year/
// app.listen(PORT, () => {
//     console.log("Server is running on Port 3000")
// })