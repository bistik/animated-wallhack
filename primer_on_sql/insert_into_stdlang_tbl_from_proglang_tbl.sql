CREATE TABLE stdlang_tbl (
    language    VARCHAR(20),
    standard    VARCHAR(10)
);

INSERT INTO stdlang_tbl 
SELECT language, standard FROM proglang_tbl WHERE standard IS NOT NULL;
