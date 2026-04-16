import { Router } from "express";
import { listarJogos, buscarJogoPorId, criarJogo, alterarJogo, alterarCampoJogo, deletarJogoPorId } from "../controllers/psnController.js";
import { regrasValidarJogo } from "../validators/psnValidator.js";

const router = Router();



router.get('/', listarJogos);
router.get('/:id',buscarJogoPorId);
router.post('/', regrasValidarJogo, criarJogo);
router.put('/:id', alterarJogo)
router.patch('/:id', alterarCampoJogo)
router.delete('/:id', deletarJogoPorId)


export default router;