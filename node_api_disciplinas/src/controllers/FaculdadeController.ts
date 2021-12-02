import { Request, response, Response } from 'express'
import { FaculdadeServices } from '../services/FaculdadeServices'

class FaculdadeController {

  async create(request: Request, response: Response) {
    const { disciplina, cargahoraria, professor } = request.body

    const faculdadeServices = new FaculdadeServices()

    try {
      const faculdade = await faculdadeServices.create({ disciplina, cargahoraria, professor })
      return response.json(faculdade)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const faculdadeServices = new FaculdadeServices()

    try {
      const faculdade = await faculdadeServices.index()
      return response.json(faculdade)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const faculdadeServices = new FaculdadeServices()
    const { id } = request.params

    try {
      const faculdade = await faculdadeServices.show({ id })
      return response.json(faculdade)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const faculdadeServices = new FaculdadeServices()
    const { id } = request.params

    try {
      await faculdadeServices.delete({ id })
      return response.json({ message: 'id da disciplina excluído com sucesso !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { disciplina, cargahoraria, professor } = request.body
    const { id } = request.params

    const faculdadeServices = new FaculdadeServices()

    try {
      const faculdade = await faculdadeServices.update({ id, disciplina, cargahoraria, professor})
      return response.json(faculdade)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { FaculdadeController }

