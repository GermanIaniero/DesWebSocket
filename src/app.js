import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'
import viewsRouter from './routes/views.router.js'
import __dirname from './utils.js'


const PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/static', express.static(__dirname + '/public'))

app.get('/health', (req, res) => res.send('OK'))

app.use('/', viewsRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

const httpServer = app.listen(8080)
const io = new Server(httpServer)

const messages = []

io.on('connection', socket => {
    socket.on('new-product', producto => 
        console.log(producto))

        socket.on('message', data => {
            messages.push(data)
            io.emit('logs', messages)

    })
})