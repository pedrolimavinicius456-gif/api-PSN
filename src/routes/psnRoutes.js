import { Router } from "express";
import { listarJogos, buscarJogoPorId, criarJogo, alterarJogo, alterarCampoJogo, deletarJogoPorId } from "../controllers/psnController.js";


const router = Router();


const validarJogo = (req, res, next) => {
 const { nome } = req.body;
 if (!nome) {
 return res.status(400).json({ mensagem: "O nome do Jogo é obrigatório!" });
 }
 next(); // Se tiver nome, segue para o controller
};
// Aplicando na rota de criar
router.post('/', validarJogo, criarJogo);

router.get('/', listarJogos);
router.get('/:id',buscarJogoPorId);
router.post('/', criarJogo);
router.put('/:id', alterarJogo)
router.patch('/:id', alterarCampoJogo)
router.delete('/:id', deletarJogoPorId)


export default router;