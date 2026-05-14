import db from "../config/database.js";
import PsnService from "../services/psnService.js";

export const listarJogos = async (req, res, next) => {
    try{
        const jogos = await PsnService.listarJogos();

        res.status(200).json(jogos);
    } catch(error) {
        next(error);
    }
};

export const buscarJogoPorId = async (req, res, next) =>{
    try{
    const { id } = req.params;

    const psnDto = await PsnService.buscarJogoPorId(id);
    res.status(200).json(psnDto);
    } catch (error) {
        next(error);
    }
};

export const criarJogo = async (req, res, next) => {
    try{
        const novoJogo = await PsnService.criarJogo(req.body);

        res.status(201).json(novoJogo);
    } catch (error) {
        next(error);
    };
};

export const alterarJogo =  async (req, res, next) => {
    try {
    const { id } = req.params;

    const jogoAtualizado = await PsnService.alterarJogo(id, req.body);  

    res.status(200).json(jogoAtualizado);

    } catch (error) {
        next(error);
    };     
}

export const alterarCampoJogo = async (req, res) => {
    try {   
    const { id } = req.params;
    const psn = db.data.PSN.find(p => p.id === Number(id));

    if(!psn) return res.status(404).json({ mensagem: "Jogo não encontrado"});
    

    if(req.body.nome) psn.nome = req.body.nome;
    if(req.body.criador) psn.criador = req.body.criador;
    if(req.body.ano) psn.ano = req.body.ano;
    if(req.body.categoria) psn.categoria = req.body.categoria;
    await db.write();
    res.json(psn);
    } catch (error) {
        next(error);
    };
}

export const deletarJogoPorId = async (req, res, next) => {
    try {   
        const { id } = req.params;

        await PsnService.deletarJogo(id);

    res.status(204).send();
    } catch (error) {
        next(error);
    };  
}