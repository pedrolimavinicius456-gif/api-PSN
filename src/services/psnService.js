import PsnRepository from "../repositories/psnRepository.js";
import { PsnResponseDTO } from '../dtos/psnDto.js'
import UserRepository from "../repositories/userRepository.js";

class PsnService {

    static async listarJogos(){
        const jogos = await PsnRepository.findAll();

        return jogos.map(jogo => new PsnResponseDTO(jogo));

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

    static async criarJogo(data) {

        const novoJogo = await PsnRepository.create(data);

        return new PsnResponseDTO(novoJogo);
    }

        static async alterarJogo(id, data) {
            const jogoAtualizado = await PsnRepository.update(id, data);

            if (!jogoAtualizado) {
                const error = new Error('Jogo não encontrado');
                error.statusCode = 404;
                throw error;    
            }

            return new PsnResponseDTO(jogoAtualizado);
        }

        static async deletarJogo(id) {
            const jogoDeletado = await PsnRepository.delete(id);

            if (!jogoDeletado) {
                const error = new Error('Jogo não encontrado');
                error.statusCode = 404;
                throw error;    
            }
        }

    
}

export default PsnService;