import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (request, response) => {
  return response.send("Home here.");
};

const handleLogin = (request, response) => {
  return response.send("Login here.");
};

app.get("/", handleHome);
app.get("./login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
