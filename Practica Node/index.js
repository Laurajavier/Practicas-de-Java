const express = require('express')
const app = express()
const port = 3000

app.get('/Inicio', (req, res) => {
  res.send('<h1 style="color: blue;">Pagina de Inicio</h1>')
})

app.get('/Producto', (req, res) => {
    res.send('<h1 style="color: blue;">Pagina de productos</h1>')
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
