import express from "express";
import cors from "cors";

const app = express();

const port = 3001;

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));


app.get("/", (req, res) => {
  res.send(JSON.stringify({res: 'paper'}));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
