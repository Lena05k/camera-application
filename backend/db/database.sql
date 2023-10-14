create TABLE report(
    id SERIAL PRIMARY KEY,

);

create TABLE photo(
    id SERIAL PRIMARY KEY,

);

create TABLE data(
    id SERIAL PRIMARY KEY,
    data DATA,
    time TIME
);

create TABLE developer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    snils VARCHAR(11),
    post VARCHAR(100),
);

create TABLE location(
    id SERIAL PRIMARY KEY,
    workshop VARCHAR(100),
    support TINYINT(4),
    object VARCHAR(30),
);

create TABLE conditions(
    id SERIAL PRIMARY KEY,
    temperature TINYINT(3),
    pressure SMALLINT(1500),
    humiday VARCHAR(4),
);

create TABLE defects(
    id SERIAL PRIMARY KEY,

);