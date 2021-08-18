"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authenticate_controller_1 = require("./controllers/authenticate.controller");
var company_controller_1 = require("./controllers/company.controller");
var industry_controller_1 = require("./controllers/industry.controller");
var sector_controller_1 = require("./controllers/sector.controller");
var users_controller_1 = require("./controllers/users.controller");
require("./middleweres/auth");
var auth_1 = require("./middleweres/auth");
// import { AuthLogin } from "./middleweres/auth";
var router = express_1.Router();
exports.router = router;
//controllers
var sectorieController = new sector_controller_1.SectorController();
var industryController = new industry_controller_1.IndustryController();
var companyController = new company_controller_1.CompanyController();
var usersController = new users_controller_1.UsersController();
var authenticateUserController = new authenticate_controller_1.AuthenticateUserController();
//Home 
router.get('/', function (_, res) {
    res.send({ message: 'Welcome to Player - 2 challenge' });
});
//users
router.post("/login", authenticateUserController.handle);
router.post('/users-create', usersController.handleCreate);
//crud sectorie
router.post('/sectorie-create', auth_1.AuthLogin, sectorieController.handleCreate);
router.delete('/sectorie-delete/:id', auth_1.AuthLogin, sectorieController.handleRemove);
router.get('/sectorie-all', auth_1.AuthLogin, sectorieController.handleShow);
router.get('/sectorie-show-by-id/:id', auth_1.AuthLogin, sectorieController.handleShowById);
router.put('/sectorie-update', auth_1.AuthLogin, sectorieController.handleUpdate);
//industry
router.post('/industry-create', auth_1.AuthLogin, industryController.handleCreate);
router.delete('/industry-delete/:id', auth_1.AuthLogin, industryController.handleRemove);
//crud company
router.post('/company-create', auth_1.AuthLogin, companyController.handleCreate);
router.delete('/company-delete/:id', auth_1.AuthLogin, companyController.handleRemove);
router.get('/company-all', auth_1.AuthLogin, companyController.handleShow);
router.get('/company-show-by-id/:id', auth_1.AuthLogin, companyController.handleShowById);
router.put('/company-update', auth_1.AuthLogin, companyController.handleUpdate);
