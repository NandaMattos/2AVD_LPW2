import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('faculdade')
class Faculdade {

  @PrimaryColumn()
  id: string;

  @Column()
  disciplina: string;

  @Column()
  cargahoraria: string;

  @Column()
  professor: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Faculdade }

