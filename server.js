const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')
const fs = require('fs')
const https = require('https')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
	host:
	port:
	user:
	password:
	database:
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
	res.send('Welcome')
})
app.use('/api', routes)

app.listen(app.get('port'), ()=>{
	console.log('server running on port', app.get('port'))
})
