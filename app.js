const express = require('express')
const app = express()
const port = 3000
const path = 'localhost'

app.use(express.static('public'))

app.listen(port, () => {
  console.warn('Listening on', 'http://' + path + ':' + port)
  console.log(`App listening on port ${port}!`)
})
