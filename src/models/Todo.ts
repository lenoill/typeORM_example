
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Todo extends BaseModel{
    
    @Column('varchar', {
        nullable: false,
        unique: true
    })
    public title?:string;

    @Column('varchar')
    public description?:string;

    @ManyToOne(()=> User, user => user.todo)
    public user?: User;

    @ManyToMany(()=> Category, category => category.todos)
    @JoinTable({
        name: 'TodoUCategory'
    })
    public categories?: Category;
}