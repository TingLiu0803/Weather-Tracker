"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Sales {

  static async create({ sales_name, sales_revanue }) {
    const duplicateCheck = await db.query(
          `SELECT sales_name
           FROM sales_emps
           WHERE sales_name = $1`,
        [sales_name]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate Sales Person: ${sales_name}`);

    const result = await db.query(
          `INSERT INTO sales_emps
           (sales_name, sales_revanue)
           VALUES ($1, $2)
           RETURNING sales_name, sales_revanue`,
        [
          sales_name,
          sales_revanue,
        ],
    );
    const sales = result.rows[0];

    return sales;
  }

  static async findAll() {
    let query = `SELECT sales_name,
                        sales_revanue
                 FROM sales_emps`;
                 
    const salesRes = await db.query(query);
    return salesRes.rows;
  }

  static async get(sales_name) {
    const salesRes = await db.query(
          `SELECT sales_name,
                  sales_revanue
           FROM sales_emps
           WHERE sales_name = $1`,
        [sales_name]);

    const sales = salesRes.rows[0];

    if (!sales) throw new NotFoundError(`No sales: ${sales_name}`);

    const sales_detailRes = await db.query(
          `SELECT id, product_name, sold_price, profit, sold_date
           FROM sales_detail
           WHERE sales_name = $1
           ORDER BY id`,
        [sales_name],
    );

    sales.sales_detail = sales_detailRes.rows;

    return sales;
  }

  static async remove(salesName) {
    const result = await db.query(
          `DELETE
           FROM sales_emps
           WHERE sales_name = $1
           RETURNING sales_name`,
        [sales_name]);
    const sales = result.rows[0];

    if (!sales) throw new NotFoundError(`No sales: ${salesName}`);
  }
}


module.exports = Sales;
