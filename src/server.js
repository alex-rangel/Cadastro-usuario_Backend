const express = require('express')
const app = express()
const runmigration = require('./database/runMigrations')

const rotas = require('./routes')

app.use(express.json())
app.use(rotas)
app.use(runmigration)


app.listen(3002, () => {
    console.log('O servidor esta rodando na porta 3002')
})