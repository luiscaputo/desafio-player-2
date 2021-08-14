import { Router } from "express";
import { IndustryController } from "./controllers/industry.controller";
import { SectorController } from "./controllers/sector.controller"

const router = Router();
//controllers
const sectorieController = new SectorController();
const industryController = new IndustryController();

router.post('/sectorie', sectorieController.handle);
router.post('/industry', industryController.handle);

export { router }