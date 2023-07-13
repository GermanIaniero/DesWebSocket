const socket = io()
const chatbox = document.getElementById('chatbox')
let producto = sessionStorage.getItem('producto') || ''

/*if (!user) {
    Swal.fire({
        title: 'Auth',
        input: 'text',
        text: 'Set username',
        inputValidator: value => {
            return !value.trim() && 'Please. Write a username'
        },
        allowOutsideClick: false
    }).then(result => {
        user = result.value
        document.getElementById('username').innerHTML = user
        sessionStorage.setItem("user", user)
        socket.emit('new', user)
    })
} else {
    document.getElementById('username').innerHTML = user
    socket.emit('new', user)
}*/


producto = result.value
        document.getElementById('username').innerHTML = producto
        sessionStorage.setItem("producto", producto)
        socket.emit('new', producto)

        document.getElementById('username').innerHTML = producto
    socket.emit('new', producto)

// Enviar mensajes
chatbox.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const message = chatbox.value.trim()
        if (message.length > 0) {
            socket.emit('message', {
                id,
                producto,
                name,
                price,
                message
            })

            chatbox.value = ''
        }
    }
})

// Recibir Mensajes
socket.on('logs', data => {
    const divLogs = document.getElementById('logs')
    console.log(data)
    let messages = ''
    messages = ' '
            
    data.forEach(msn => {
       messages = `<p><i>${msn.id} ${msn.producto} ${msn.name}</i> ${msn.price} ${msn.message} </p>` + messages
       
    })

    console.log (messages)
    divLogs.innerHTML = messages
})