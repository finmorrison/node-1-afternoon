let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body
        messages.push({ id, text, time })
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },
    //taking the text that exists in the body already
    //setting up update ID to use when it's called
    // this is what actually sets the id to a number
    //this sets an index to a single message
    // starts the return of updated messages
    // individual message id
    // new message text
    update: (req, res) => {
        const { text } = req.body
        const updateID = req.params.id
        const messageIndex = messages.findIndex((message) => message.id == updateID)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)

    },

    delete: (req, res) => {
        const deleteID = req.params.id
        messageIndex = messages.findIndex((message) => message.id == deleteID)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}