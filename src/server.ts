import "typeorm"
import express, { json } from "express";
import { router } from "./routes";
import "./database"

const app = express()

app.use(express.json());
app.use(router);

app.listen(8080, () => console.log("Server is running"));