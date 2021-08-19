import express, { json, NextFunction, Request, Response } from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import { AuthLogin } from "./middleweres/auth";
import swaggerDocs from "./swagger.json";
import "./database";


const app = express()
const access = cors();

app.use((request: Request, response: Response, next:NextFunction) => {
    response.header("Access-control-Allow-Origin", "https://desafio-player-2.herokuapp.com/");
    response.header("Access-control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next;

})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
//app.use(AuthLogin);
app.use("/v1", router);
app.use(router);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server is running"));