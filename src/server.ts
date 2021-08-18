import express, { json } from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import { AuthLogin } from "./middleweres/auth";
import swaggerDocs from "./swagger.json";
import "./database";


const app = express()

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
//app.use(AuthLogin);
app.use("/v1", router);
app.use(router);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server is running"));