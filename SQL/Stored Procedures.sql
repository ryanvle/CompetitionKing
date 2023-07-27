DELIMITER //

CREATE PROCEDURE insert_tblPERSON(
IN p_GenderName varchar(30),
IN p_LevelName varchar(30),
IN p_FirstName varchar(60),
IN p_LastName varchar(60),
IN p_Age INT,
IN p_Email varchar(255)
)
BEGIN
	DECLARE p_G_ID INT;
    DECLARE p_L_ID INT;
    
    SET p_G_ID = (SELECT GenderID FROM tblGENDER WHERE GenderName = p_GenderName);
    SET p_L_ID = (SELECT LevelID FROM tblLEVEL WHERE LevelName = p_LevelName);

	START TRANSACTION;
    
    INSERT INTO defaultdb.tblPERSON (GenderID, LevelID, FirstName, LastName, Age, Email)
    VALUES (p_G_ID, p_L_ID, p_FirstName, p_LastName, p_Age, p_Email);
    
    COMMIT;
    
    END //

DELIMITER ;
