const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Its Worked. Sab kuch sahi chal rha hai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

