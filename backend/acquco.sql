\echo 'Delete and recreate acquco db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE acquco;
CREATE DATABASE acquco;
\connect acquco

\i acquco-schema.sql
\i acquco-seed.sql
