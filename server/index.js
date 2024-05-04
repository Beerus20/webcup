require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req, res) => {
	res.send("HELLO WORLD");
})

app.listen(PORT, () => {
	console.log(`SERVER RUNNING ON PORT ${PORT}`);
})