import { PessoaEntity } from "../entities/pessoa.entity";
import { Entity, OneToMany } from "typeorm";
import { TurmaEntity } from "../entities/turma.entity";

@Entity('professores')
export class ProfessorEntity extends PessoaEntity {
    @OneToMany(type => TurmaEntity, turma => turma.professor)
    public turmas: TurmaEntity[];
}