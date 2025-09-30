const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const { errorHandler, routeNotFound } = require("./middleware/errorMiddleware");
const routes = require("./routes");
const dbConnection = require("./utils/connectDB");

dotenv.config();
dbConnection();

const app = express();

app.use(cors({
  origin: ["https://task-manager-client-7638.netlify.app","https://task-manager-client-axo0.onrender.com", "http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

app.use(routeNotFound);
app.use(errorHandler);

// ✅ Cloud Run needs this:
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});