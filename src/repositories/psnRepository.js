import db from '../data/psn.Data.js';
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


    static async create(createPsnData) {
        db.read();

        const novoJogo = {
            id: uuidv4(),
            nome: data.nome,
            criador: data.criador,
            ano: data.ano,
            categoria: data.categoria,
            //id_dono: createPsnData.id_dono
        };

        db.data.PSN.push(novoJogo);
        db.write();

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
    }

}

export default PsnRepository;