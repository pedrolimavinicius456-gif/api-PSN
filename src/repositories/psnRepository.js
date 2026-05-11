import db from '../data/psn.Data.js';
import { v4 as uuidv4 } from 'uuid';

class PsnRepository {
    static async create(createPsnData) {
        db.read();

        const novoJogo = {
            id: uuidv4(),
            nome: psn.data.nome,
            criador: psn.data.criador,
            ano: psn.data.ano,
            categoria: psn.data.categoria,
            id_dono: createPsnData.id_dono
        };

        db.data.PSN.push(novoJogo);
        db.write();

        return novoJogo;    
    }

    static async findById(id) {
        db.read();
        return db.data.PSN.find(p => p.id === id);
    }
}

export default PsnRepository;