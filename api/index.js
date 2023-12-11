const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Center = require("./models/Center");
const Booking = require("./models/Booking")

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");

const imageDownloader = require("image-downloader");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req, res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

//console.log({ __dirname });
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.json(newName);
});

const photosMiddleware = multer({ dest: "uploads/" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    //uploadedFiles.push(newPath.replace("uploads/", ""));
    uploadedFiles.push(newPath.replace("uploads\\", ""));
  }
  res.json(uploadedFiles);
});

app.post("/centers/", (req, res) => {
  const { token } = req.cookies;
  const {
    name,
    address,
    addedPhotos,
    description,
    extraInfo,
    openTime,
    closeTime,
    price,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const centerDoc = await Center.create({
      owner: userData.id,
      name,
      address,
      photos: addedPhotos,
      description,
      extraInfo,
      openTime,
      closeTime,
      price,
    });
    res.json(centerDoc);
  });
});

app.get("/user-centers", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Center.find({ owner: id }));
  });
});

app.get("/centers/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Center.findById(id));
});

app.put("/centers/", async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    name,
    address,
    addedPhotos,
    description,
    extraInfo,
    openTime,
    closeTime,
    price,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const centerDoc = await Center.findById(id);
    if (userData.id === centerDoc.owner.toString()) {
      centerDoc.set({
        name,
        address,
        photos: addedPhotos,
        description,
        extraInfo,
        openTime,
        closeTime,
        price,
      });
      await centerDoc.save();
      res.json("ok");
    }
  });
});

app.get("/centers", async (req, res) => {
  // mongoose.connect(process.env.MONGO_URL);
  res.json(await Center.find());
});

app.post('/bookings', async (req, res) => {
  const userData = await getUserDataFromReq(req);
  const {
    center,date, time,name,phone,price,
  } = req.body;
  Booking.create({
    center,date, time,name,phone,price,
    user:userData.id,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  });
});

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get('/bookings', async (req,res) => {
  const userData = await getUserDataFromReq(req);
  res.json( await Booking.find({user:userData.id}).populate('center') );
});

app.listen(4000);

// 03:53
