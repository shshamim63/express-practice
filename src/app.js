const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const publicDirectoryPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialviewPath = path.join(__dirname, '../templates/partials')

hbs.registerPartials(partialviewPath)
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: "New Content",
    from: 'hbs'
  })
})

app.get('/help',(req, res) => {
  res.send("I am from help")
})

app.get('/weather',(req, res) => {
  res.send('<h1>Rendering Html</h1>')
})


app.get('/info',(req, res) => {
  res.send({
    name: "Shakhawat Hossain",
    location: "Dhaka, Bangladesh"
  })
})


app.listen(3000, () => {
  console.log('Server is listening in port 3000')
})