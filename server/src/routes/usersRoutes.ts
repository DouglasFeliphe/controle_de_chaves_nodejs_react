import express from 'express';
const routes = express.Router()


routes.get('/users')
routes.get('/users/:id')
routes.post('/user')
routes.put('/users/:id')
routes.delete('/users/:id')

export default routes