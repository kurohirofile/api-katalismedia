import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'https://chat-katalismedia.vercel.app' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
const OPEN_API_KEY = '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'; // Anda harus mengganti nilainya dengan kunci API sebenarnya.

app.get('/api/open-ai-key', (req, res) => {
  res.json({ Open_AI_Key: OPEN_API_KEY });
});

app.listen(5000, ()=> console.log('Server running at port 5000'));