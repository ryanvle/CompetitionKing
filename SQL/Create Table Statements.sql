--tblGENDER
CREATE TABLE tblGENDER (
    GenderID SERIAL PRIMARY KEY,
    GenderName varchar(50) NOT NULL
);

--tblLEVEL
CREATE TABLE tblLEVEL (
    LevelID SERIAL PRIMARY KEY,
    LevelName varchar(30) NOT NULL
);

--tblPERSON
CREATE TABLE tblPERSON (
    PersonID SERIAL PRIMARY KEY,
    GenderID INT NOT NULL,
    LevelID INT NOT NULL,
    FirstName varchar(60) NOT NULL,
    LastName varchar(60) NOT NULL,
    Age INT,
    Email varchar(255) UNIQUE NOT NULL,

    FOREIGN KEY (GenderID)
        REFERENCES tblGENDER(GenderID),
    
    FOREIGN KEY (LevelID)
        REFERENCES tblLEVEL (LevelID)
);