import { Router } from 'express'
import  taskRoutes  from './task.routes'
import noteRoutes from './note.routes'  

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'API is running' })
})


router.use('/tasks', taskRoutes)
router.use('/tasks', noteRoutes)
router.use('/notes', noteRoutes)

export { router as routes }