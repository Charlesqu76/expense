CREATE TABLE
    category (
        id SERIAL PRIMARY KEY,
        name varchar(50),
        icon varchar(50),
        create_time TIMESTAMP DEFAULT NOW ()
    );

CREATE TABLE
    expense (
        id SERIAL PRIMARY KEY,
        amount float NOT NULL,
        description text,
        create_time TIMESTAMP DEFAULT NOW (),
        category_id int NOT NULL REFERENCES category
    );