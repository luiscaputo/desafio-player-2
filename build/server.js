"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var routes_1 = require("./routes");
var auth_1 = require("./middleweres/auth");
var swagger_json_1 = __importDefault(require("./swagger.json"));
require("./database");
var app = express_1.default();
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(express_1.default.json());
app.use(auth_1.AuthLogin);
app.use("/v1", routes_1.router);
app.use(routes_1.router);
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () { return console.log("Server is running"); });
