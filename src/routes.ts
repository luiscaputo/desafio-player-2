import { Router } from "express";
import { CompanyController } from "./controllers/company.controller";
import { IndustryController } from "./controllers/industry.controller";
import { SectorController } from "./controllers/sector.controller"

const router = Router();
//controllers
const sectorieController = new SectorController();
const industryController = new IndustryController();
const companyController = new CompanyController();

//crud sectorie
router.post('/sectorie', sectorieController.handleCreate);
router.delete('/sectorie/:id', sectorieController.handleRemove);
router.get('/sectorie-show', sectorieController.handleShow);
router.get('/sectorie-show-by-id/:id', sectorieController.handleShowById);
router.put('/sectorie-update', sectorieController.handleUpdate);
//industry
router.post('/industry', industryController.handle);
//company
router.post('/company', companyController.handleCreate);

export { router }