import express from "express";

const PORT = 4000;

const app = express();

const logger = (request, response, next) => {
  console.log(`${request.method} ${request.url}`); // GET /URL
  next();
};

const handleHome = (request, response) => {
  return response.send("I love middlewares");
};

const handleLogin = (request, response) => {
  return response.send({ message: "Login here." });
};

app.get("/", logger, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
