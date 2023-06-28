--tblGENDER
CREATE TABLE tblGENDER (
    GenderID SERIAL PRIMARY KEY,
    GenderName varchar(50) NOT NULL
    GenderID INT AUTO_INCREMENT,
    GenderName varchar(50) NOT NULL,
    
    PRIMARY KEY(GenderID)
);

--tblLEVEL
CREATE TABLE tblLEVEL (
    LevelID SERIAL PRIMARY KEY,
    LevelName varchar(30) NOT NULL
    LevelID INT AUTO_INCREMENT,
    LevelName varchar(30) NOT NULL,
    
    PRIMARY KEY(LevelID)
);

--tblPERSON
CREATE TABLE tblPERSON (
    PersonID SERIAL PRIMARY KEY,
    PersonID INT AUTO_INCREMENT,
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
    
    PRIMARY KEY(PersonID)
);

ALTER TABLE tblPERSON
ADD CONSTRAINT FK_Gender
FOREIGN KEY (GenderID) REFERENCES tblGENDER(GenderID);

ALTER TABLE tblPERSON
ADD CONSTRAINT FK_Level
FOREIGN KEY (LevelID) REFERENCES tblLEVEL(LevelID);

--tblSTYLE
CREATE TABLE tblSTYLE(
	StyleID INT AUTO_INCREMENT,
    StyleName varchar(50),
    
    PRIMARY KEY (StyleID)
);

--tblFORM
CREATE TABLE tblFORM(
	FormID INT AUTO_INCREMENT,
    FormName varchar(100),
    
    PRIMARY KEY (FormID)
);

--tblPERSON_STYLE
CREATE TABLE tblPERSON_STYLE(
	PersonStyleID INT AUTO_INCREMENT,
    PersonID INT NOT NULL,
    StyleID INT NOT NULL,
    
    PRIMARY KEY (PersonStyleID)
);

ALTER TABLE tblPERSON_STYLE
ADD CONSTRAINT FK_Person
FOREIGN KEY (PersonID) REFERENCES tblPERSON(PersonID);

ALTER TABLE tblPERSON_STYLE
ADD CONSTRAINT FK_Style
FOREIGN KEY (StyleID) REFERENCES tblSTYLE(StyleID);
