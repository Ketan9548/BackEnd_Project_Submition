import express from "express";
import connection from "./DbConnection/DBconnection.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./Routes/AuthenticationRoutes.js";

dotenv.config();
connection();

const app = express();
app.use(bodyParser.json());
app.use("/api/auth", router);


app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Backend!");
});
app.get("/api/auth/login", (req, res) => {
  res.send("Welcome to the E-commerce Backend Login Page!");
});
app.get("/api/auth/register", (req, res) => {
  res.send("Welcome to the E-commerce Backend register page!");
});
app.get("/api/auth/logout", (req, res) => {
  res.send("Welcome to the E-commerce Backend logout page!");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
