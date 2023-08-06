CREATE DATABASE  IF NOT EXISTS `test`;
USE `test`;
-- Create the Movies table
CREATE TABLE Movies (
    movie_id INT PRIMARY KEY,
    title VARCHAR(255),
    release_year INT
);

-- Insert data into the Movies table
INSERT INTO Movies (movie_id, title, release_year)
VALUES
    (1, 'The Matrix', 1999),
    (2, 'Jurassic Park', 1993),
    (3, 'Star Wars: ANH', 1977);

-- Create the Directors table
CREATE TABLE Directors (
    director_id INT PRIMARY KEY,
    director_name VARCHAR(255),
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id)
);

-- Insert data into the Directors table
INSERT INTO Directors (director_id, director_name, movie_id)
VALUES
    (1, 'Lana Wachowski', 1),
    (2, 'Lilly Wachowski', 1),
    (3, 'Steven Spielberg', 2),
    (4, 'George Lucas', 3);
