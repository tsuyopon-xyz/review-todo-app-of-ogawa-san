import express from 'express'
import todosRouter from './routers/todos'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/todos', todosRouter)

export default app
