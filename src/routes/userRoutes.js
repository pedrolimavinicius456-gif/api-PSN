import { Router } from "express";
import { listarUsers, criarUser, mudarUser, deletarUser } from "../controllers/userController.js";
import { buscarUserPorIdValidation, regrasValidarUser } from "../validators/userValidator.js";

const router = Router();

router.get('/', listarUsers);
router.post('/', regrasValidarUser, criarUser);
router.put('/:id', mudarUser);
router.delete('/:id', deletarUser);

export default router;