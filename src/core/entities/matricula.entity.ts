import { AlunoEntity } from "../entities/aluno.entity";
import { TurmaEntity } from "../entities/turma.entity";
import { MatriculaDiaLetivoEntity } from "../entities/matricula-dia-letivo.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany } from "typeorm";

@Entity('matriculas')
export class MatriculaEntity{
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column('integer', { name: 'numero' })
    public numero!: number;

    @Column('integer', { name: 'faltas' })
    public faltas!: number;

    @Column('numeric')
    public nota!: number;

    @Column()
    public alunoId!: string;

    @Column()
    public turmaId!: string;
    
    @ManyToOne(type => AlunoEntity, aluno => aluno.matriculas)
    public aluno!: AlunoEntity;
    
    @ManyToOne(type => TurmaEntity, turma => turma.matricula)
    public turma!: TurmaEntity;

    @OneToMany(type => MatriculaDiaLetivoEntity, mdl => mdl.matricula)
    public matriculaDiaLetivos!: MatriculaDiaLetivoEntity[];
    
}