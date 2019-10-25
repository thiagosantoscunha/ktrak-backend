import { TurmaEntity } from "../entities/turma.entity";
import { MatriculaDiaLetivoEntity } from "../entities/matricula-dia-letivo.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany } from "typeorm";

@Entity('dias_letivos')
export class DiaLetivoEntity{
    @PrimaryGeneratedColumn("uuid", { name: 'id' })
    public id: string;

    @Column('timestamp', { name: 'data' })
    public data: Date;

    @ManyToOne(type => TurmaEntity, turma => turma.diaLetivos)
    public turma: TurmaEntity;

    @OneToMany(type => MatriculaDiaLetivoEntity, m => m.diaLetivo)
    public matriculaDiaLetivos!: MatriculaDiaLetivoEntity[];
}