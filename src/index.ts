import express from "express";
import connectDB from "./Logger/db";
var cors=require('cors')
const app = express();

// Connect Database
connectDB();

app.use(express.json());
// app.use(cors());

app.use("/api/write",require("./api/write"));
app.use("/api/user",require("./api/user"));
app.use("/api/login",require("./api/login"));


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



app.listen(5050, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5050 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });