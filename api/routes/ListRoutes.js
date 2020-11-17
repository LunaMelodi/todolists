import { Router } from "express";
import ListController from "../controllers/ListController";

const router = Router();

router.get("/", ListController.getAllListsByUserId);
router.post("/", ListController.addList);
router.put("/:id", ListController.updateList);
router.delete("/:id", ListController.deleteList);

export default router;
