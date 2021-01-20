const express = require('express');
const { fork } = require('child_process')
const app = express();

app.get('/prime', (req, res) => {
    const childProcess = fork('./isPrime.js')
    childProcess.send(parseInt(req.query.number))
    childProcess.on('message', response => res.send(response) )
})

app.listen('1234', () => {
    console.log('App is running on 1234 port')
})
