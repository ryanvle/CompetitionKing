--tblGENDER
CREATE TABLE tblGENDER (
    GenderID INT AUTO_INCREMENT,
    GenderName varchar(50) NOT NULL,
    
    PRIMARY KEY(GenderID)
);

--tblLEVEL
CREATE TABLE tblLEVEL (
    LevelID INT AUTO_INCREMENT,
    LevelName varchar(30) NOT NULL,
    
    PRIMARY KEY(LevelID)
);

--tblPERSON
CREATE TABLE tblPERSON (
    PersonID INT AUTO_INCREMENT,
    GenderID INT NOT NULL,
    LevelID INT NOT NULL,
    FirstName varchar(60) NOT NULL,
    LastName varchar(60) NOT NULL,
    Age INT,
    Email varchar(255) UNIQUE NOT NULL,
    
    PRIMARY KEY(PersonID)
);

ALTER TABLE tblPERSON
ADD CONSTRAINT FK_Gender
FOREIGN KEY (GenderID) REFERENCES tblGENDER(GenderID);

ALTER TABLE tblPERSON
ADD CONSTRAINT FK_Level
FOREIGN KEY (LevelID) REFERENCES tblLEVEL(LevelID);
