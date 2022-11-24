// @ts-check

const express = require('express');
const wait = require('node:timers/promises').setTimeout
const app = express()

app.get('/api/hello', async (req, res) => {
  await wait(1000)
  res.send('Hello from server')
})

app.listen(4000)