import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Todo } from './Todo';

@Entity()
export class Category extends BaseModel{
    @Column('varchar')
    public title?:string;

    @ManyToMany(()=> Todo, todo => todo.categories)
    public todos?: Todo[];
}