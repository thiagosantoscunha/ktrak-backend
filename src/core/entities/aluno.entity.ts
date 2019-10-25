import { PessoaEntity } from "../entities/pessoa.entity";
import { MatriculaEntity } from "../entities/matricula.entity";
import { Entity, OneToMany } from "typeorm";

@Entity('alunos')
export class AlunoEntity extends PessoaEntity {

    @OneToMany(type => MatriculaEntity, matricula => matricula.aluno)
    public matriculas!: MatriculaEntity[];

}