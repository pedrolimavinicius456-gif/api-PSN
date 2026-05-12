import { Router } from "express";
import { listarJogos, buscarJogoPorId, criarJogo, alterarJogo, alterarCampoJogo, deletarJogoPorId } from "../controllers/psnController.js";
//import{ createPsnValidation } from '../dtos/psnDto.js';
import { buscarJogoPorIdValidation, regrasValidarJogo } from "../validators/psnValidator.js";

const router = Router();



router.get('/', listarJogos);
router.get('/:id',buscarJogoPorIdValidation,regrasValidarJogo,buscarJogoPorId);
router.post('/', regrasValidarJogo, criarJogo);
router.put('/:id', alterarJogo)
router.patch('/:id', alterarCampoJogo)
router.delete('/:id', deletarJogoPorId)


export default router;