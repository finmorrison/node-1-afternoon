const express=require('express')
const bodyParser = require('body-parser')
const PORT = 3001
const app = express()
const messageController = require('./controllers/message_controller')

app.use(bodyParser.json())


const messages = '/api/messages'
app.post (messages, messageController.create)
app.get(messages, messageController.read)
app.put(`${messages}/:id`, messageController.update)
app.delete(`${messages}/:id`, messageController.delete)




app.listen(PORT, ()=>{console.log(`listening on port ${PORT}.`)}) 