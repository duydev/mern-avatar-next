import express from 'express'
import bodyParser from 'body-parser'

import router from './routes'

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

export default app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`)
})
