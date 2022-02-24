"use strict";

const express = require("express");

const { BadRequestError } = require("../expressError");
const Sales = require("../models/sales_emps");
const axios = require("axios");

const router = new express.Router();

const BASE_URL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=43.7001&lon=-79.4163&exclude=minutely&appid=66706a23b56fe91bc3eed152c2495b74&units=metric";

router.post("/", async (req, res, next) => {
  try {
    const sales = await Sales.create(req.body);
    return res.status(201).json({ sales });
  } catch (err) {
    return next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const weeklyWeatherData = await axios(BASE_URL).then((res) => res.data);
    return res.json({ weeklyWeatherData });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
