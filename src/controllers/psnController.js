import db from "../data/psn.Data.js";
import PsnService from "../services/psn.service.js";

export const listarJogos = (req, res) => {
    res.status(200).json(db.data.PSN)
};

export const buscarJogoPorId = async (req, res, next) =>{
    try{
    const { id } = req.params;

    const psnDto = await PsnService.buscarJogoPorId(id);
    //const psn = db.data.PSN.find(p => p.id === Number(id));
    res.status(200).json(psnDto);
    } catch (error) {
        next(error);
    }
};

export const criarJogo = async (req, res, next) => {
    try{
    const {nome, criador, ano, categoria} = req.body;
    const novoJogo = {id: db.data.PSN.length + 1, nome, criador, ano, categoria};

    db.data.PSN.push(novoJogo);
    await db.write()
    res.status(201).json(novoJogo);
    } catch (error) {
        next(error);
    };
};

export const alterarJogo =  async (req, res) => {
    try {
    const { id } = req.params;
    const index = db.data.PSN.findIndex(p => p.id === Number(id));

    if(index === -1) return res.status(404).json({ mensagem:"Jogo não encontrado" })
    
    db.data.PSN[index] = {id: Number(id), ...req.body };
    await db.write();
    res.json(db.data.PSN[index]);
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

export const deletarJogoPorId = async (req, res) => {
    try {   
    const { id } = req.params;
    const tamanhoInicial = db.data.PSN.length;

    db.data.PSN = db.data.PSN.filter(p => p.id !== Number(id));
    await db.write();   

    if(db.data.PSN.length === tamanhoInicial) {
        return res.status(404).json({ mensagem: "Jogo não encontrado"});
    }

    res.status(204).send();
    } catch (error) {
        next(error);
    };  
}