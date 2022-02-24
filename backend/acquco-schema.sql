CREATE TABLE sales_emps (
  sales_name VARCHAR(25) PRIMARY KEY,
  sales_revanue INTEGER CHECK (sales_revanue >= 0)
);

CREATE TABLE ads (
  id SERIAL PRIMARY KEY,
  ads_name VARCHAR(25),
  ads_cost NUMERIC CHECK (ads_cost >= 0),
  ads_view NUMERIC CHECK (ads_view >= 0)
);

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(25),
  stock NUMERIC CHECK (stock >= 0)
);

CREATE TABLE sales_detail (
  id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  sold_price INTEGER CHECK (sold_price >= 0),
  profit NUMERIC,
  sold_date DATE,
  sales_name VARCHAR(25) NOT NULL
    REFERENCES sales_emps ON DELETE CASCADE
);