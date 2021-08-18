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
exports.SectorController = void 0;
var sectorie_service_1 = require("../services/sectorie.service");
var SectorController = /** @class */ (function () {
    function SectorController() {
    }
    SectorController.prototype.handleCreate = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorService, _a, name_1, description, save, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        sectorService = new sectorie_service_1.Sectorie();
                        _a = request.body, name_1 = _a.name, description = _a.description;
                        return [4 /*yield*/, sectorService.execute({ name: name_1, description: description })];
                    case 1:
                        save = _b.sent();
                        return [2 /*return*/, response.status(200).json({ success: true, save: save })];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, response.status(400).json({ success: false, message: e_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SectorController.prototype.handleRemove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorieService, id, removeSectorie;
            return __generator(this, function (_a) {
                try {
                    sectorieService = new sectorie_service_1.Sectorie();
                    id = request.params.id;
                    removeSectorie = sectorieService.remove(id);
                    return [2 /*return*/, response.status(200).json({ success: true, message: "Sector Removido", removeSectorie: removeSectorie })];
                }
                catch (e) {
                    return [2 /*return*/, response.status(400).json({ success: false, message: e })];
                }
                return [2 /*return*/];
            });
        });
    };
    SectorController.prototype.handleShow = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorieService, show, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sectorieService = new sectorie_service_1.Sectorie();
                        return [4 /*yield*/, sectorieService.show()];
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
    SectorController.prototype.handleShowById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, sectorieService, showById, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        sectorieService = new sectorie_service_1.Sectorie();
                        return [4 /*yield*/, sectorieService.showById(id)];
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
    SectorController.prototype.handleUpdate = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, name_2, description, sectorieService, updateSectorie, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, id = _a.id, name_2 = _a.name, description = _a.description;
                        sectorieService = new sectorie_service_1.Sectorie();
                        return [4 /*yield*/, sectorieService.update({ id: id, name: name_2, description: description })];
                    case 1:
                        updateSectorie = _b.sent();
                        return [2 /*return*/, response.status(200).json({ success: true, message: "Sector Actualizado" })];
                    case 2:
                        e_4 = _b.sent();
                        return [2 /*return*/, response.status(400).json({ success: false, message: e_4 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SectorController;
}());
exports.SectorController = SectorController;
