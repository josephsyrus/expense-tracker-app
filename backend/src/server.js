import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config()
const PORT=process.env.PORT||5001;

const app=express();

app.use(express.json());
app.use(rateLimiter);

``
app.use("/api/transactions", transactionsRoute);

initDB().then(()=>{
    app.listen(5001, ()=>{
        console.log(`Server running on PORT:${PORT}`);
    })
})