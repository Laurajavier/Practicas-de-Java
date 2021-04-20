const express = require('express')
const app = express()
const port = 3000

app.get('/inicio', (req, res) => {
  res.send('Pagina de inicio')
})
app.get('/productos', (req, res) => {
    res.send('Pagina de productos')
  })
  app.get('/contacto', (req, res) => {
    res.send('Pagina de contacto')
  })
  app.get('/nosotros', (req, res) => {
    res.send('Pagina de Sobre nosotros')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})