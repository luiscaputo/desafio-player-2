import { Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticate.controller";
import { CompanyController } from "./controllers/company.controller";
import { IndustryController } from "./controllers/industry.controller";
import { SectorController } from "./controllers/sector.controller"
import { UsersController } from "./controllers/users.controller";

const router = Router();
//controllers
const sectorieController = new SectorController();
const industryController = new IndustryController();
const companyController = new CompanyController();
const usersController = new UsersController();
const authenticateUserController = new AuthenticateUserController();

//Home 
router.get('/', (_, res) => {
  res.send({ message: 'Welcome to Player - 2 challenge' });
});
//users
router.post("/login", authenticateUserController.handle);
router.post('/users-create', usersController.handleCreate);
//crud sectorie
router.post('/sectorie-create', sectorieController.handleCreate);
router.delete('/sectorie-delete/:id', sectorieController.handleRemove);
router.get('/sectorie-all', sectorieController.handleShow);
router.get('/sectorie-show-by-id/:id', sectorieController.handleShowById);
router.put('/sectorie-update', sectorieController.handleUpdate);
//industry
router.post('/industry-create', industryController.handleCreate);
router.delete('/industry-delete/:id', industryController.handleRemove);
//crud company
router.post('/company-create', companyController.handleCreate);
router.delete('/company-delete/:id', companyController.handleRemove);
router.get('/company-all', companyController.handleShow);
router.get('/company-show-by-id/:id', companyController.handleShowById);
router.put('/company-update', companyController.handleUpdate);

export { router }