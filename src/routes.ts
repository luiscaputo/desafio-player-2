import { Router } from "express";
import { SectorController } from "./controllers/sector.controller"

const router = Router();
//controllers
const sectorieController = new SectorController();

router.post('/sectorie', sectorieController.handle);

export { router }