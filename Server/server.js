const io = require('socket.io')(5000, {
    cors: {
        // origin: '*',
        // methods: ["GET", "POST"],
        // credentials:true,
        // allowedHeaders: ["access-token"],
        origin:'http://localhost:3000',
        methods:['GET','POST'],
        credentials:true
    }
});

io.on('connection', socket => {

    //This is to use static id every time we refresh
    //because socket creates new ID everytime it refreshes
    //so having a phone which changes its number everytime you ON it is a useless thing
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})