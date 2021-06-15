import express from "express";
import connectDB from "./Logger/db";
import loginRouter from "./api/login"
import cors from "cors"
const app = express();

// Connect Database
connectDB();

app.use(express.json());

app.use("/api/write",require("./api/write"));
app.use("/api/user",require("./api/user"));
app.use("/api/login", loginRouter);

app.use(cors());

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message; 
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });