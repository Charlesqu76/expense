CREATE TABLE
    category (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        icon VARCHAR(50),
        create_time TIMESTAMP
        WITH
            TIME ZONE DEFAULT NOW ()
    );

CREATE TABLE
    expense (
        id SERIAL PRIMARY KEY,
        amount FLOAT NOT NULL,
        description TEXT,
        category_id INT NOT NULL REFERENCES category (id),
        create_time TIMESTAMP
        WITH
            TIME ZONE DEFAULT NOW ()
    );