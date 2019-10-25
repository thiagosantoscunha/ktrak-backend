import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('pessoas')
export class PessoaEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column('varchar', { name: 'nome', length: 255 })
    public nome: string;

    @Column('timestamp', { name: 'dataNascimento' })
    public dataNascimento: Date;

    @Column('varchar', { name: 'bairro', length: 255 })
    public bairro: string;

    @Column('varchar', { name: 'cidade', length: 255 })
    public cidade: string;

    @Column('varchar', { name: 'estado', length: 255 })
    public estado: string;

    @Column('varchar', { name: 'digital', length: 255 })
    public digital: string;
    
}