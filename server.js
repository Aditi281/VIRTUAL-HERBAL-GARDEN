const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

const plantRoutes = require("./routes/plantRoutes");
app.use("/api", plantRoutes);

const aiRoutes = require("./routes/aiRoutes");
app.use("/api", aiRoutes);

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "frontend", "index.html")
    );
});

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log(
        `🚀 Server running on port ${process.env.PORT || 3000}`
    );
});