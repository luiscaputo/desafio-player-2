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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var typeorm_1 = require("typeorm");
var axios_1 = __importDefault(require("axios"));
var company_repositories_1 = require("../repositories/company.repositories");
var insdustry_repositories_1 = require("../repositories/insdustry.repositories");
var sectories_repositories_1 = require("../repositories/sectories.repositories");
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.execute = function (_a) {
        var name = _a.name, sector_id = _a.sector_id, industry_id = _a.industry_id, CNPJ = _a.CNPJ, CNAE = _a.CNAE, titular_company = _a.titular_company;
        return __awaiter(this, void 0, void 0, function () {
            var companyRepositories, sectorieRepositorie, industryRepositorie, alreadExistsCompany, sectorieExists, industryExists, alreadExistsCNPJ, getCNPJ, saveCompany;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        companyRepositories = typeorm_1.getCustomRepository(company_repositories_1.CompanyRepositories);
                        sectorieRepositorie = typeorm_1.getCustomRepository(sectories_repositories_1.SectorieRepositorie);
                        industryRepositorie = typeorm_1.getCustomRepository(insdustry_repositories_1.IndustryRepositories);
                        return [4 /*yield*/, companyRepositories.findOne({ name: name })];
                    case 1:
                        alreadExistsCompany = _b.sent();
                        if (!alreadExistsCompany) return [3 /*break*/, 2];
                        return [2 /*return*/, 'Essa empresa já está registrada'];
                    case 2: return [4 /*yield*/, sectorieRepositorie.findOne(sector_id)];
                    case 3:
                        sectorieExists = _b.sent();
                        if (!sectorieExists) return [3 /*break*/, 13];
                        return [4 /*yield*/, industryRepositorie.findOne(industry_id)];
                    case 4:
                        industryExists = _b.sent();
                        if (!industryExists) return [3 /*break*/, 11];
                        return [4 /*yield*/, companyRepositories.findOne({ CNPJ: CNPJ })];
                    case 5:
                        alreadExistsCNPJ = _b.sent();
                        if (!alreadExistsCNPJ) return [3 /*break*/, 6];
                        return [2 /*return*/, "Já Existe uma empresa com esse CNPJ"];
                    case 6: return [4 /*yield*/, axios_1.default.get("https://brasilapi.com.br/api/cnpj/v1/" + CNPJ)];
                    case 7:
                        getCNPJ = _b.sent();
                        if (!(getCNPJ.status === 200)) return [3 /*break*/, 9];
                        saveCompany = companyRepositories.create({
                            name: name,
                            sector_id: sector_id,
                            industry_id: industry_id,
                            CNPJ: CNPJ,
                            CNAE: CNAE,
                            titular_company: titular_company
                        });
                        return [4 /*yield*/, companyRepositories.save(saveCompany)];
                    case 8:
                        _b.sent();
                        return [2 /*return*/, getCNPJ.data];
                    case 9: return [2 /*return*/, "CNPJ inexistente!"];
                    case 10: return [3 /*break*/, 12];
                    case 11: return [2 /*return*/, "O segmento passado não existe!"];
                    case 12: return [3 /*break*/, 14];
                    case 13: return [2 /*return*/, "O sector Passado Não Existe!"];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var companyRepositories, ifExists, deleteCompany;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        companyRepositories = typeorm_1.getCustomRepository(company_repositories_1.CompanyRepositories);
                        ifExists = companyRepositories.findOne({ id: id });
                        if (!!ifExists) return [3 /*break*/, 1];
                        return [2 /*return*/, "Essa Empresa não está cadastrada!"];
                    case 1: return [4 /*yield*/, companyRepositories
                            .createQueryBuilder()
                            .delete()
                            .where("id = :id", { id: id })
                            .execute()];
                    case 2:
                        deleteCompany = _a.sent();
                        return [2 /*return*/, deleteCompany];
                }
            });
        });
    };
    Company.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var companyRepositories, showAllCompanies;
            return __generator(this, function (_a) {
                companyRepositories = typeorm_1.getCustomRepository(company_repositories_1.CompanyRepositories);
                showAllCompanies = companyRepositories.find();
                return [2 /*return*/, showAllCompanies];
            });
        });
    };
    Company.prototype.showById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var companyRepositories, showCompanyById;
            return __generator(this, function (_a) {
                companyRepositories = typeorm_1.getCustomRepository(company_repositories_1.CompanyRepositories);
                showCompanyById = companyRepositories.findByIds(id);
                return [2 /*return*/, showCompanyById];
            });
        });
    };
    Company.prototype.update = function (_a) {
        var id = _a.id, name = _a.name, sector_id = _a.sector_id, titular_company = _a.titular_company;
        return __awaiter(this, void 0, void 0, function () {
            var companyRepositories, alreadyExistsId, companyUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        companyRepositories = typeorm_1.getCustomRepository(company_repositories_1.CompanyRepositories);
                        return [4 /*yield*/, companyRepositories.findOne({ id: id })];
                    case 1:
                        alreadyExistsId = _b.sent();
                        if (!alreadyExistsId) {
                            return [2 /*return*/, "Esse sector não existe!"];
                        }
                        else {
                            companyUpdate = companyRepositories
                                .createQueryBuilder()
                                .update()
                                .set({
                                name: name,
                                sector_id: sector_id,
                                titular_company: titular_company
                            })
                                .where("id = :id", { id: id })
                                .execute();
                            return [2 /*return*/, companyUpdate];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Company;
}());
exports.Company = Company;
