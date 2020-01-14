import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import config from "./config";
import auth from "./middlewares/auth";
import ax from "./middlewares/ax";
import cors from "cors";

function setupRoutes(app) {
  
  // fs.readdirSync  เป็นตัวที่บอก ว่า ให้อ่าน file จากใน dir ของตัวแปร APP_DIR
  const APP_DIR = `${__dirname}/app`; //directory ปัจจุบัน
  const features = fs
    .readdirSync(APP_DIR)
    .filter(file => fs.statSync(`${APP_DIR}/${file}`).isDirectory());
  console.log(features);
  // console.log( fs.readdirSync(APP_DIR),'reading-sync  ');
  features.forEach(feature => {
    //  if(feature!='articles'){
    const router = express.Router();
    const routes = require(`${APP_DIR}/${feature}/routers.js`);
    console.log(`${APP_DIR}/${feature}/routers.js`);
    routes.setup(router);

    //  console.log(router,'start_router');
    app.use(`/${feature}`, router); // ให้จัดการ ภายใต้ /users  ใน function routes.setup(router)
    // }
  });
}

export function setup() {
  var express = require("express");
  var app = express();
  var bodyParser = require("body-parser");
  // const PORT = 5000;
  const PORT = config.port;
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(auth);
  // app.use(cors());

  // app.use((_,res,next)=>{
  //   res.header('Access-Control-Allow-Origin','*')
  //   next();
  // });

  //////////////////Detail///////////////
  setupRoutes(app);
  //   app.get("/", (req, res) => {
  //     res.end("Hello World");
  //   });

  //////////////////Detail///////////////
  var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application Run At http://%s:%s;", host, port);
  });
}
