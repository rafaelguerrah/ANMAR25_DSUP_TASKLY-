import express from 'express'
import { routes } from './routes'
import { errorMiddleware } from './middlewares/error.middleware'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errorMiddleware)


export { app }
