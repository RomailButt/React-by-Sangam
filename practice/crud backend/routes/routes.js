import express from 'express';
import userController from '../controller/userController.js'
const router = express.Router();

router.post("/studentInsert" , userController.insertUser);
router.put("/studentUpdate" , userController.updateUser);
router.delete("/studentDelete" , userController.deleteUser);
router.get("/studentAll" , userController.getUser);

export default router;

