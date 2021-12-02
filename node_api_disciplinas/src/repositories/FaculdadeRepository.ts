import { Repository, EntityRepository } from 'typeorm'
import { Faculdade } from '../entities/Faculdade'

@EntityRepository(Faculdade)
class FaculdadeRepository extends Repository<Faculdade> {

}

export { FaculdadeRepository }

