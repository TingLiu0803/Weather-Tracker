\echo 'Delete and recreate acquco db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE weather;
CREATE DATABASE weather;
\connect weather

\i weather-schema.sql
\i weather-seed.sql
