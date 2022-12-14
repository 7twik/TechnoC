const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const PORT= process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const path=require("path");
const router = express.Router();

dotenv.config();



mongoose.connect(process.env.MONGODB_URI || link ,()=> console.log("connected to db"));

const apiRouter=express.Router();
const foundRouter=express.Router();
const registerRouter=express.Router();
const delRouter=express.Router();
const noteRouter=express.Router();
const AuthRouter=express.Router();
const poostRouter=express.Router();

foundRouter.use("/found", require("./routes/route"));
registerRouter.use("/register", require("./routes/route"));
delRouter.use("/del", require("./routes/route"));
noteRouter.use("/note", require("./routes/route"));
AuthRouter.use("/Auth", require("./routes/route"));
poostRouter.use("/poost", require("./routes/route"));

apiRouter.use(foundRouter);
apiRouter.use(registerRouter);
apiRouter.use(delRouter);
apiRouter.use(noteRouter);
apiRouter.use(AuthRouter);
apiRouter.use(poostRouter);
app.use("/api", apiRouter);



// --------------------------deployment------------------------------

const __dirname1 = path.resolve();





if (process.env.NODE_ENV === "production") {
 
 app.use(express.static('frontend/build'));
  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
  app.get("/Register", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
  app.get("/Home", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
  app.get("/Post", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );


} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}




app.use("/", require("./routes/route"));
app.use("/Register", require("./routes/route"));
app.use("/Post", require("./routes/route"));
app.use("/MyPost", require("./routes/route"));


// --------------------------deployment------------------------------


app.listen(PORT, function () {
  console.log("App is listening on port 5000");
});
