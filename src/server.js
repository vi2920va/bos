import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (request, response, next) => {
  console.log(`Someone is going to: ${request.url}`);
  next();
};

const handleHome = (request, response) => {
  return response.send("I love middlewares");
};

const handleLogin = (request, response) => {
  return response.send({ message: "Login here." });
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
