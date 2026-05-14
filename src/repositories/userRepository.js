import db from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

class UserRepository {

    static async findAll(){
        await db.read();
        return db.data.Users;
    }
    
    static async create(data) {
        await db.read();

        const novoUser = {
            id: uuidv4(),
            nome: data.nome,
            idade: data.idade,
            email: data.email,
            senha: data.senha
        };
        db.data.Users.push(novoUser);
        await db.write();
        return novoUser;
    }

    static async update(id, data) {
        await db.read();

        const index = db.data.Users.findIndex(u => u.id === id);
        if(index === -1) {
            return null;
        }
        db.data.Users[index] = {
            ...db.data.Users[index],
            ...data
        };
        await db.write();
        return db.data.Users[index];
    }

    static async delete(id) {
        await db.read();    
        const user = db.data.Users.find(u => u.id === id);
        if(!user) {
            return false;
        }
        db.data.Users = db.data.Users.filter(u => u.id !== id);
        await db.write();
        return true;
    }
}

export default UserRepository;