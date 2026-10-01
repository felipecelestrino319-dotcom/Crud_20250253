import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {pool} from "./config/db.js";
import userRoutes from "./routes/usuarioRoutes.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
