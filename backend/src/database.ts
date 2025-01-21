import { Pool } from "pg";

// Setup your PostgreSQL database connection
const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: "database", // This should match the service name in your docker-compose.yaml file
  database: process.env.POSTGRES_DB || "ecommerce",
  password: process.env.POSTGRES_PASSWORD || "password",
  port: 5432, // Default PostgreSQL port
});

export default pool;
