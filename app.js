const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('It's Worked. CI/CD works on Instance Test Server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

