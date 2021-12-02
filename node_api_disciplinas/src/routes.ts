import { Router } from 'express'

import { FaculdadeController } from './controllers/FaculdadeController'

const routes = Router();

const faculdadeController = new FaculdadeController()

routes.post('/faculdade', faculdadeController.create)
routes.get('/faculdade', faculdadeController.index)
routes.get('/faculdade/:id', faculdadeController.show)
routes.delete('/faculdade/:id', faculdadeController.delete)
routes.put('/faculdade/:id', faculdadeController.update)

export { routes }

