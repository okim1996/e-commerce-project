import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const corsOptions = {
  origin: "http://localhost:5173", // Frontend Url
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed Headers
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "application is running!" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("closing server");
  server.close(() => {
    console.log("server closed");
    process.exit(0); // Ensure the process exits
  });
});
