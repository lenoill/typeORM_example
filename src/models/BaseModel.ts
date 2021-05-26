import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseModel {
    @PrimaryGeneratedColumn('increment')
    public id!: number;
    
    // Date de création automatique de notre utilisatuer
    @CreateDateColumn()
    public creationDate!: Date;

    // Date de modication de l'entité
    @UpdateDateColumn()
    public updateDate!: Date;

    // Date de suppresion => SOFT DELETE
    @DeleteDateColumn()
    public deletionDate?: Date;
}