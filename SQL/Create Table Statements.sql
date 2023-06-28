--tblGENDER
CREATE TABLE tblGENDER (
<<<<<<< HEAD
    GenderID SERIAL PRIMARY KEY,
    GenderName varchar(50) NOT NULL
=======
    GenderID INT AUTO_INCREMENT,
    GenderName varchar(50) NOT NULL,
    
    PRIMARY KEY(GenderID)
>>>>>>> 65cac7f0bee73f0676cccda0c72ec98a3ee6d301
);

--tblLEVEL
CREATE TABLE tblLEVEL (
<<<<<<< HEAD
    LevelID SERIAL PRIMARY KEY,
    LevelName varchar(30) NOT NULL
=======
    LevelID INT AUTO_INCREMENT,
    LevelName varchar(30) NOT NULL,
    
    PRIMARY KEY(LevelID)
>>>>>>> 65cac7f0bee73f0676cccda0c72ec98a3ee6d301
);

--tblPERSON
CREATE TABLE tblPERSON (
<<<<<<< HEAD
    PersonID SERIAL PRIMARY KEY,
=======
    PersonID INT AUTO_INCREMENT,
>>>>>>> 65cac7f0bee73f0676cccda0c72ec98a3ee6d301
    GenderID INT NOT NULL,
    LevelID INT NOT NULL,
    FirstName varchar(60) NOT NULL,
    LastName varchar(60) NOT NULL,
    Age INT,
    Email varchar(255) UNIQUE NOT NULL,
<<<<<<< HEAD

    FOREIGN KEY (GenderID)
        REFERENCES tblGENDER(GenderID),
    
    FOREIGN KEY (LevelID)
        REFERENCES tblLEVEL (LevelID)
);
=======
    
    PRIMARY KEY(PersonID)
);

ALTER TABLE tblPERSON
ADD CONSTRAINT FK_Gender
FOREIGN KEY (GenderID) REFERENCES tblGENDER(GenderID);

ALTER TABLE tblPERSON
ADD CONSTRAINT FK_Level
FOREIGN KEY (LevelID) REFERENCES tblLEVEL(LevelID);
>>>>>>> 65cac7f0bee73f0676cccda0c72ec98a3ee6d301
