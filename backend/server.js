require('babel-register')

const app = require('./src/app').default

app.on('error', err => {
  if (err.syscall !== 'listen') throw err
  switch (err.code) {
    case 'EACCES':
      console.error(`Port ${PORT} requires elevated privileges.`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`Port ${PORT} is already in use.`)
      process.exit(1)
    default:
      throw err
  }
})

process.on('uncaughtException', err => {
  console.error(`Uncaught Exception`, err.stack)
})

process.on('unhandledRejection', err => {
  console.error(`Unhandle Rejection`, err.stack)
})
