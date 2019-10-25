import { MatriculaEntity } from "../entities/matricula.entity";
import { DiaLetivoEntity } from "../entities/dia-letivo.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";

@Entity('matriculas_dias_letivos')
export class MatriculaDiaLetivoEntity{
    @PrimaryGeneratedColumn("uuid", { name: 'id' })
    public id!:string;

    @Column('boolean', { name: 'presente' })
    public presente!: boolean;

    @Column('varchar')
    public idMatricula!: string;
    
    @Column('varchar')
    public idDiaLetivo!: string;
    
    @ManyToOne(type => MatriculaEntity, m => m.matriculaDiaLetivos)
    public matricula!: MatriculaEntity;

    @ManyToOne(type => DiaLetivoEntity, d => d.matriculaDiaLetivos)
    public diaLetivo!: DiaLetivoEntity;

}