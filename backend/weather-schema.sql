CREATE TABLE favorite_days (
  id SERIAL PRIMARY KEY,
  dt NUMERIC,
  picture_code TEXT NOT NULL,
  min_temp NUMERIC,
  max_temp NUMERIC
);