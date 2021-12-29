const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data recieved ${name} - ${age}`)
})
customEmitter.on('response', () => {
    console.log(`data recieved 2`)
})
customEmitter.emit('response', 'john', 38)

customEmitter.on('response', () => {
    console.log(`data recieved 3`)
})
