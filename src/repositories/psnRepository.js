import db from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

class PsnRepository {

    static async findAll(){
        await db.read();
        return db.data.PSN;
    }

    static async findById(id){
        await db.read();

        return db.data.PSN.find(p => p.id === id);
    }


    static async create(data) {
        await db.read();

        const novoJogo = {
            id: uuidv4(),
            nome: data.nome,
            criador: data.criador,
            ano: data.ano,
            categoria: data.categoria,
        };

        db.data.PSN.push(novoJogo);

        await db.write();

        return novoJogo;    
    }

    static async update(id, data) {
        await db.read();

        const index = db.data.PSN.findIndex(p => p.id === id);
        if(index === -1) {
            return null;
        }

        db.data.PSN[index] = {
            ...db.data.PSN[index],
            ...data
        }
        await db.write();
        return db.data.PSN[index];
    }

    static async delete(id) {
        await db.read();

        const jogo = db.data.PSN.find(p => p.id === id);

        if(!jogo) {
            return false;
        }

        db.data.PSN = db.data.PSN.filter(p => p.id !== id);
        await db.write();
        return true;
    }   

}

export default PsnRepository;