import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("application is running");
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
