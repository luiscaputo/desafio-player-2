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
exports.Sectorie = void 0;
var typeorm_1 = require("typeorm");
var sectories_repositories_1 = require("../repositories/sectories.repositories");
var Sectorie = /** @class */ (function () {
    function Sectorie() {
    }
    Sectorie.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        return __awaiter(this, void 0, void 0, function () {
            var sectorieRepositories, alreadExistsSectorie, createSectorie, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sectorieRepositories = typeorm_1.getCustomRepository(sectories_repositories_1.SectorieRepositorie);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, sectorieRepositories.findOne({ name: name })];
                    case 2:
                        alreadExistsSectorie = _b.sent();
                        if (!alreadExistsSectorie) return [3 /*break*/, 3];
                        return [2 /*return*/, 'Esse Sector já existe'];
                    case 3:
                        createSectorie = sectorieRepositories.create({
                            name: name,
                            description: description
                        });
                        return [4 /*yield*/, sectorieRepositories.save(createSectorie)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, createSectorie];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _b.sent();
                        return [2 /*return*/, e_1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Sectorie.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorieRepositories, ifExists, deleteSectorie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sectorieRepositories = typeorm_1.getCustomRepository(sectories_repositories_1.SectorieRepositorie);
                        ifExists = sectorieRepositories.findOne({ id: id });
                        if (!!ifExists) return [3 /*break*/, 1];
                        return [2 /*return*/, "Esse Sector não existe"];
                    case 1: return [4 /*yield*/, sectorieRepositories
                            .createQueryBuilder()
                            .delete()
                            .where("id = :id", { id: id })
                            .execute()];
                    case 2:
                        deleteSectorie = _a.sent();
                        return [2 /*return*/, deleteSectorie];
                }
            });
        });
    };
    Sectorie.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sectorieRepositories, showAllSectories;
            return __generator(this, function (_a) {
                sectorieRepositories = typeorm_1.getCustomRepository(sectories_repositories_1.SectorieRepositorie);
                showAllSectories = sectorieRepositories.find();
                return [2 /*return*/, showAllSectories];
            });
        });
    };
    Sectorie.prototype.showById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorieRepositories, showSectorieById;
            return __generator(this, function (_a) {
                sectorieRepositories = typeorm_1.getCustomRepository(sectories_repositories_1.SectorieRepositorie);
                showSectorieById = sectorieRepositories.findByIds(id);
                return [2 /*return*/, showSectorieById];
            });
        });
    };
    Sectorie.prototype.update = function (_a) {
        var id = _a.id, name = _a.name, description = _a.description;
        return __awaiter(this, void 0, void 0, function () {
            var sectorieRepositories, alreadyExistsId, sectorieUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sectorieRepositories = typeorm_1.getCustomRepository(sectories_repositories_1.SectorieRepositorie);
                        return [4 /*yield*/, sectorieRepositories.findOne({ id: id })];
                    case 1:
                        alreadyExistsId = _b.sent();
                        if (!alreadyExistsId) {
                            return [2 /*return*/, "Esse sector não existe!"];
                        }
                        else {
                            sectorieUpdate = sectorieRepositories
                                .createQueryBuilder()
                                .update()
                                .set({
                                name: name,
                                description: description
                            })
                                .where("id = :id", { id: id })
                                .execute();
                            return [2 /*return*/, sectorieUpdate];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Sectorie;
}());
exports.Sectorie = Sectorie;
