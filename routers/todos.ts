import { Router } from 'express'
import { postTodo } from '../controllers/todos'

const router = Router()

router.route('/').post(postTodo)

export default router
