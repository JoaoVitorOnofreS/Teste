const express = require("express");
const router = require("express").Router();

router.use("/", require("./blog"));

module.exports = router;
