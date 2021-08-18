"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
var company_service_1 = require("../services/company.service");
var CompanyController = /** @class */ (function () {
    function CompanyController() {
    }
    CompanyController.prototype.handleCreate = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, sector_id, industry_id, CNPJ, CNAE, titular_company, companyService, createCompany, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, name_1 = _a.name, sector_id = _a.sector_id, industry_id = _a.industry_id, CNPJ = _a.CNPJ, CNAE = _a.CNAE, titular_company = _a.titular_company;
                        companyService = new company_service_1.Company();
                        return [4 /*yield*/, companyService.execute({ name: name_1, sector_id: sector_id, industry_id: industry_id, CNPJ: CNPJ, CNAE: CNAE, titular_company: titular_company })];
                    case 1:
                        createCompany = _b.sent();
                        return [2 /*return*/, response.status(200).json({ success: true, message: "Empresa Cadastrada", CNPJ: createCompany })];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, response.status(400).json({ success: false, message: e_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.prototype.handleRemove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var companyService, id, removeCompany;
            return __generator(this, function (_a) {
                try {
                    companyService = new company_service_1.Company();
                    id = request.params.id;
                    removeCompany = companyService.remove(id);
                    return [2 /*return*/, response.status(200).json({ success: true, message: "Empresa Removida", removeCompany: removeCompany })];
                }
                catch (e) {
                    return [2 /*return*/, response.status(400).json({ success: false, message: e })];
                }
                return [2 /*return*/];
            });
        });
    };
    CompanyController.prototype.handleShow = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var companyService, show, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        companyService = new company_service_1.Company();
                        return [4 /*yield*/, companyService.show()];
                    case 1:
                        show = _a.sent();
                        return [2 /*return*/, response.status(200).json({ success: true, message: show })];
                    case 2:
                        e_2 = _a.sent();
                        response.status(400).json({ success: false, message: e_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.prototype.handleShowById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, companyService, showById, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        companyService = new company_service_1.Company();
                        return [4 /*yield*/, companyService.showById(id)];
                    case 1:
                        showById = _a.sent();
                        return [2 /*return*/, response.status(200).json({ success: true, message: showById })];
                    case 2:
                        e_3 = _a.sent();
                        return [2 /*return*/, response.status(400).json({ success: false, message: e_3 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.prototype.handleUpdate = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, name_2, sector_id, titular_company, companyService, updateCompany, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, id = _a.id, name_2 = _a.name, sector_id = _a.sector_id, titular_company = _a.titular_company;
                        companyService = new company_service_1.Company();
                        return [4 /*yield*/, companyService.update({ id: id, name: name_2, sector_id: sector_id, titular_company: titular_company })];
                    case 1:
                        updateCompany = _b.sent();
                        return [2 /*return*/, response.status(200).json({ success: true, message: "Dados da Empresa Atualizado!", data: updateCompany })];
                    case 2:
                        e_4 = _b.sent();
                        return [2 /*return*/, response.status(400).json({ success: false, message: e_4 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CompanyController;
}());
exports.CompanyController = CompanyController;
