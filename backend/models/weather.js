"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Weather {

  static async create({ dt, picture_code, min_temp, max_temp }) {
    const duplicateCheck = await db.query(
          `SELECT dt
           FROM favorite_days
           WHERE dt = $1`,
        [dt]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate time in second: ${dt}`);

    const result = await db.query(
          `INSERT INTO favorite_days
           (dt, picture_code, min_temp, max_temp)
           VALUES ($1, $2, $3, $4)
           RETURNING dt, picture_code, min_temp, max_temp`,
        [
          dt,
          picture_code,
          min_temp,
          max_temp
        ],
    );
    const favoriteDay = result.rows[0];

    return favoriteDay;
  }

  static async findAll() {
    let query = `SELECT dt,
                        picture_code,
                        min_temp,
                        max_temp
                 FROM favorite_days`;
                 
    const favDaysRes = await db.query(query);
    return favDaysRes.rows;
  }
}

module.exports = Weather;
