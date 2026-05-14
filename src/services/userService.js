import e from 'express';
import { UserResponseDTO } from '../dtos/userDto.js';
import UserRepository from '../repositories/userRepository.js';

class UserService {

    static async listarUsers(){
        const users = await UserRepository.findAll();
        return users.map(user => new UserResponseDTO(user));
    }
    static async criarUser(data) {
        const novoUser = await UserRepository.create(data);
        return new UserResponseDTO(novoUser);
    }

    static async mudarUser(id, data) {
        const userAtualizado = await UserRepository.update(id, data);

        if (!userAtualizado) {
            const error = new Error('User não encontrado');
            error.statusCode = 404;
            throw error;    
        }
        return new UserResponseDTO(userAtualizado);
    }

    static async deletarUser(id) {
        const userDeletado = await UserRepository.delete(id);
        if (!userDeletado) {
            const error = new Error('User não encontrado');
            error.statusCode = 404;
            throw error;    
        }
        return new UserResponseDTO(userDeletado);
    }
}

export default UserService;