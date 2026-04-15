import { PSN } from "../data/psn.Data.js";

export const listarJogos = (req, res) => {
    res.status(200).json(PSN)
};

export const buscarJogoPorId = (req, res) =>{
    const { id } = req.params;

    const psn = PSN.find(p => p.id === Number(id));

    if(!psn) {
        return res.status(404).json({mensagem: "Jogo não encontrado!" });
    }

    res.status(200).json(psn);
};

export const criarJogo = (req, res) => {

    const {nome, criador, ano, categoria} = req.body;

    const novoJogo = {id: PSN.length + 1, nome, criador, ano, categoria};

    PSN.push(novoJogo);
    res.status(201).json(novoJogo);
}

export const alterarJogo =  (req, res) => {
    const { id } = req.params;
    const index = PSN.findIndex(p => p.id === Number(id));

    if(index === -1) return res.status(404).json({ mensagem:"Jogo não encontrado" })
    
    PSN[index] = {id: Number(id), ...req.body };
    res.json(PSN[index]);
}

export const alterarCampoJogo = (req, res) => {
    const { id } = req.params;
    const psn = PSN.find(p => p.id === Number(id));

    if(!psn) return res.status(404).json({ mensagem: "Jogo não encontrado"});
    

    if(req.body.nome) psn.nome = req.body.nome;
    if(req.body.criador) psn.criador = req.body.criador;
    if(req.body.ano) psn.ano = req.body.ano;
    if(req.body.categoria) psn.categoria = req.body.categoria;

    res.json(psn);
}

export const deletarJogoPorId = (req, res) => {
    const { id } = req.params;
    const tamanhoInicial = PSN.length;

    PSN = PSN.filter(p => p.id !== Number(id));

    if(PSN.length === tamanhoInicial) {
        return res.status(404).json({ mensagem: "Jogo não encontrado"});
    }

    res.status(204).send();
}