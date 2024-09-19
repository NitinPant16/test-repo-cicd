const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Its Worked. Jenkins Pipeline on GKE are working CI/CD works With LoadBalancer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

