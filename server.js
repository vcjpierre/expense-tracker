import express from "express";
import expressSession from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//ROUTES
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";

//Prisma Client
import prisma from "./constats/config.js";

const app = express();
const port = process.env.SERVER_PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//SERVER CLIENT FOLDER IE REACT BUILD
app.use(express.static(path.join(__dirname, "clientBuild")));

//CORS
//ADD YOUR URL HERE
app.use(
  cors({
    origin: [
      "http://localhost:3006",
      "https://localhost:5000",
      "https://expense-tracker-snowy-eta.vercel.app",
      "https://expense-tracker-production-7e31.up.railway.app"
    ],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE", "PATCH"],
    credentials: true,
  })
);

//SESSIONS
app.use(
  expressSession({
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      ...(process.env.NODE_ENV === "production"
        ? { domain: ".up.railway.app" }
        : {}),
      maxAge: 1000 * 60 * 60 * 24,
    },
    secret: "a santa at nasa",
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ROUTES
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", transactionRoutes);
app.use("/api", categoriesRoutes);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "clientBuild", "index.html"));
});

app.listen(port, () => {
  console.log(`SERVER STARTED: http://localhost:${port}`);
});
