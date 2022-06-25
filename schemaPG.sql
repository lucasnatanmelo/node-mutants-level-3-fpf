CREATE TABLE dnas (
    dna_id serial PRIMARY KEY,
    dna_array VARCHAR[] NOT NULL,
    mutant BOOLEAN NOT NULL
);

-> TO SELECT ALL

SELECT * FROM dnas;

-> TO RESET TABLE 

SELECT * FROM dnas;

-> TO RESET dna_id SEQUENCE

ALTER SEQUENCE dnas_dna_id_seq RESTART WITH 1;