import db from '../config/database.js';
import UserService from '../services/userService.js';

export const listarUsers = async (req, res, next) => {
    try{
        const users = await UserService.listarUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const criarUser = async (req, res, next) => {
    try {
        const novoUser = await UserService.criarUser(req.body); 
        res.status(201).json(novoUser);
    } catch (error) {
        next(error);
    }
};

export const mudarUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userAtualizado = await UserService.mudarUser(id, req.body);
        res.json(userAtualizado);
    } catch (error) {
        next(error);
    }
};

export const deletarUser = async (req, res, next) => {
    try {
        const { id } = req.params; 
        await UserService.deletarUser(id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};
