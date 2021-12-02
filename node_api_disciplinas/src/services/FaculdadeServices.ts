import { getCustomRepository } from 'typeorm'
import { FaculdadeRepository } from '../repositories/FaculdadeRepository'

interface IFaculdadeCreate {
  disciplina: string;
  cargahoraria: string;
  professor: string
}

interface IFaculdadeShow {
  id: string
}

interface IFaculdadeUpdate {
  id: string
  disciplina: string;
  cargahoraria: string;
  professor: string
}

class FaculdadeServices {

  async create({ disciplina, cargahoraria, professor }: IFaculdadeCreate) {

    const faculdadeRepository = getCustomRepository(FaculdadeRepository)


    const faculdade = faculdadeRepository.create({
      disciplina,
      cargahoraria,
      professor
    })

    await faculdadeRepository.save(faculdade)

    return faculdade
  }

  async index() {
    const faculdadeRepository = getCustomRepository(FaculdadeRepository)

    const faculdade = await faculdadeRepository.find()

    return faculdade;
  }

  async show({ id }: IFaculdadeShow) {
    const faculdadeRepository = getCustomRepository(FaculdadeRepository)

    const faculdade = await faculdadeRepository.findOne({ id })

    if (!faculdade) {
      throw new Error('id da disciplina nao encontrado!!')
    }

    return faculdade;
  }

  async delete({ id }: IFaculdadeShow) {
    const faculdadeRepository = getCustomRepository(FaculdadeRepository)

    const faculdade = await faculdadeRepository.findOne({ id })

    if (!faculdade) {
      throw new Error('id da disciplina nao encontrado!!')
    }

    return await faculdadeRepository.delete({ id })
  }

  async update({ id, disciplina, cargahoraria, professor }: IFaculdadeUpdate) {
    const faculdadeRepository = getCustomRepository(FaculdadeRepository)

    let faculdade = await faculdadeRepository.findOne({ id })

    if (!faculdade) {
      throw new Error('id da disciplina nao encontrado!!')
    }

    await faculdadeRepository.update(
      id, {
      disciplina, cargahoraria, professor
    })

    faculdade = await faculdadeRepository.findOne({ id })

    return faculdade

  }
}

export { FaculdadeServices }