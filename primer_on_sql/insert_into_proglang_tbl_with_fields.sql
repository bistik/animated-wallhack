/* by specifying fields, you can order the fields anyway you want.
   Or omit the fields you don't need, provided you comply with the column constraints. */
INSERT INTO proglang_tbl
    (id, language, author, year, standard)
VALUES
    (1, 'Prolog', 'Colmarauer', '1972', 'ISO');

INSERT INTO proglang_tbl
    (id, language, author, year) /* standard is optional */
VALUES
    (2, 'Perl', 'Wall', '1987');

INSERT INTO proglang_tbl
    (id, year, standard, language, author) /* different order */
VALUES
    (3, '1964', 'ANSI', 'APL', 'Iverson');
