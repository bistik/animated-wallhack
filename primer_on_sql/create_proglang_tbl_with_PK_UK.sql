/* Add Primary Key and Unique key constraints */
CREATE TABLE proglang_tbluk (
    id          INTEGER     NOT NULL PRIMARY KEY,
    language    VARCHAR(20) NOT NULL UNIQUE,
    author      VARCHAR(25) NOT NULL,
    year        INTEGER     NOT NULL,
    standard    VARCHAR(10) NULL
);
