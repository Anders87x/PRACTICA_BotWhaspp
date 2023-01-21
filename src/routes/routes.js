const express= require("express");
const route = express.Router();

const whastsappcontroller = require("../controller/whatsappController");

route
.get("/",whastsappcontroller.VerificarToken)
.post("/",whastsappcontroller.RecibirToken)

module.exports = route;