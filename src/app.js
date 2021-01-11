const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('Hello')
})

app.get('/help',(req, res) => {
  res.send("I am from help")
})

app.listen(3000, () => {
  console.log('Server is listening in port 3000')
})