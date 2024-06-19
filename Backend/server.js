const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors({
orogin:["https://fullstack-moviesapp-api.vercel.app/"],
methods:["POST","GET"],
credentials:true
}));
app.use(express.json());

mongoose
  .connect("mongodb+srv://holkarajitgyandev:Hgfe9dcba@cluster0.wwtpzs9.mongodb.net/netflix?retryWrites=true&w=majority&appName=Cluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
