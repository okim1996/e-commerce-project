import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

// Enable cross origin resource sharing for our client
const corsOptions = {
  origin: "http://localhost:5173", // Frontend Url
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed Headers
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Use the product routes
app.use("/api", productRoutes);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ensure nodemon exits the port when restarting properly
process.on("SIGTERM", () => {
  console.log("closing server");
  server.close(() => {
    console.log("server closed");
    process.exit(0); // Ensure the process exits
  });
});
