import { application, Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticate.controller";
import { CompanyController } from "./controllers/company.controller";
import { IndustryController } from "./controllers/industry.controller";
import { SectorController } from "./controllers/sector.controller"
import { UsersController } from "./controllers/users.controller";
import "./middleweres/auth";
import { AuthLogin } from "./middleweres/auth";
// import { AuthLogin } from "./middleweres/auth";

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
router.post('/sectorie-create', AuthLogin, sectorieController.handleCreate);
router.delete('/sectorie-delete/:id', AuthLogin, sectorieController.handleRemove);
router.get('/sectorie-all', AuthLogin, sectorieController.handleShow);
router.get('/sectorie-show-by-id/:id', AuthLogin, sectorieController.handleShowById);
router.put('/sectorie-update', AuthLogin, sectorieController.handleUpdate);
//industry
router.post('/industry-create', AuthLogin, industryController.handleCreate);
router.delete('/industry-delete/:id', AuthLogin, industryController.handleRemove);
//crud company
router.post('/company-create', AuthLogin, companyController.handleCreate);
router.delete('/company-delete/:id', AuthLogin, companyController.handleRemove);
router.get('/company-all', AuthLogin, companyController.handleShow);
router.get('/company-show-by-id/:id', AuthLogin, companyController.handleShowById);
router.put('/company-update', AuthLogin, companyController.handleUpdate);

export { router }
