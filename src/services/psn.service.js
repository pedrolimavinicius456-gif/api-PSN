import PsnRepository from "../repositories/psnRepository.js";
import { PsnResponseDTO } from '../dtos/psnDto.js'
//import UserRepository from "../repositories/userRepositories.js";

class PsnService {

    static async listarJogos(){
        const jogos = await PsnRepository.findAll();

        return jogos.map(jogo => new PsnResponseDTO(jogo));

    }


    static async criarJogo(data) {

        const novoJogo = await PsnRepository.create(data);

        return new PsnResponseDTO(novoJogo);
        /*const owner = await UserRepository.findById(createPsnData.id_dono);
        if (!owner) {
            const error = new Error('Dono não encontrado');
            error.statusCode = 404;
            throw error;    
        }

        const novoJogoFromDb = await PsnRepository.create(createPsnData);

        return new PsnResponseDTO(novoJogoFromDb);
        */
    }

    static async buscarJogoPorId(id) {
        const psnFromDb = await PsnRepository.findById(id);
        
        if (!psnFromDb) {
            const error = new Error('Jogo não encontrado');
            error.statusCode = 404;
            throw error;    
        }

        const psnDto = new PsnResponseDTO(psnFromDb);

        return psnDto;
    }
}

export default PsnService;