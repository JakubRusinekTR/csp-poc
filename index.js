const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const html = fs.readFileSync('./index.html', 'utf8')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.setHeader('Content-Security-Policy', "script-src 'strict-dynamic' 'nonce-abcd'");

  res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
