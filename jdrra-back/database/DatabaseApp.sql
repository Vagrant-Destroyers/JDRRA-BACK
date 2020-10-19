-- script that create Database
-- of your Postgres server.
DROP DATABASE IF EXISTS databaseapp;
CREATE DATABASE databaseapp WITH OWNER postgres;

--show databases
\l

-- connect or use the database
\c databaseapp


-- script that create tables in DatabsesApp
-- of your Postgres server.

-- table for admins
CREATE TABLE IF NOT EXISTS admins (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            Name VARCHAR(40) NOT NULL,
                            LastName VARCHAR(40) NOT NULL,
                            Email VARCHAR(50) NOT NULL UNIQUE);

-- table for companies
CREATE TABLE IF NOT EXISTS Company (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            Name VARCHAR(40) NOT NULL,
                            City VARCHAR(40) NOT NULL,
                            LevelPost VARCHAR(100) NOT NULL,
                            Email VARCHAR(50) NOT NULL UNIQUE,
                            UserId INT GENERATED ALWAYS AS IDENTITY NOT NULL);

-- table for user
CREATE TABLE IF NOT EXISTS users (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            Username VARCHAR(20) NOT NULL,
                            Name VARCHAR(40) NOT NULL,
                            Last_name VARCHAR(40) NOT NULL,
                            Cohort INT NOT NULL,
                            City VARCHAR(40) NOT NULL,
                            Email VARCHAR(50) NOT NULL UNIQUE);

-- table for jobpost
CREATE TABLE IF NOT EXISTS jobpost (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            title TEXT NOT NULL,
                            location TEXT,
                            company TEXT,
                            date TIMESTAMP,
                            link TEXT,
                            senorityLevel TEXT,
                            place TEXT,
                            jobFunction TEXT,
                            employmenttype TEXT,
                            industries TEXT,
                            scrapperId INT GENERATED ALWAYS AS IDENTITY NOT NULL,
                            description TEXT,
                            voteup INT,
                            votedown INT);

--table webpages for scrappers
CREATE TABLE IF NOT EXISTS webpages (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            Name VARCHAR(50),
                            WebPage VARCHAR(20) NOT NULL,
                            Link VARCHAR(50));

-- list tables
\dt

-- describe table
-- \d nametable
\d admins
\d company
\d jobpost
\d users
\d webpages

SELECT title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup FROM jobpost WHERE voteup > 20 ORDER BY voteup DESC;