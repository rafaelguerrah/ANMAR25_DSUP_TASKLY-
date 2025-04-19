import { Router } from 'express'
import  taskRoutes  from './task.routes'  

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'API is running 🟢' })
})


router.use('/tasks', taskRoutes)

export { router as routes }