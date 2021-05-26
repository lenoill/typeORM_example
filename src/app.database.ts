import { createConnection } from 'typeorm';
import { Category } from './models/Category';
import { Todo } from './models/Todo';
import { User } from './models/User';


class DatabasConnector{
    static async initDatabase(){
        try{
            return await createConnection({
                type : 'mysql',
                username: 'root',
                password: 'test',
                host: 'localhost',
                port: 3306,
                database: 'gillesToTypeorm',
                synchronize: true,
                entities: [Category, User, Todo]
                });
        }catch(e){
            console.log('Une erreur est survenue : ', e);
        }
    }
}

export {DatabasConnector};