
import { plugin } from '@typegoose/typegoose';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import passportLocal from 'passport-local-mongoose';
import { Todo } from './Todo';


@plugin(passportLocal, {
        usernameField:'email'
    })
@Entity()
export class User extends BaseModel{
    @Column('varchar', {
        nullable: true,
        unique: true
    })
    public email?: string;

    @OneToMany(() => Todo, todo => todo.user)
    public todo?: Todo[];
}