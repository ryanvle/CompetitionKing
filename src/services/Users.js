const connection = require('./SqlConnection')


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const CreateNewUser = async (gender, level, Grand_Entry, Event, Role_Name, FirstName, LastName, Age, Email, School) => {
    let Person_ID = getRndInteger(100, 1000);
    //let sql = `call insert_tblPERSON('Male', 'Beginner', 'Yes', 'SIMAC', 'Competitor', 'Annie', 'Doggy', '18', 'johndoe@gmail.com', 'Clown School');`;
    let sql = `CALL insert_tblPERSON
            (
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
            )`;
    await connection.promise().query(sql, [
        gender,
        level,
        Grand_Entry,
        Event,
        Role_Name,
        FirstName,
        LastName,
        Age,
        Email,
        School,
        ], function(err, result) {
        if (err) {
            return(err)
        } else {
            return("Success!")
        }
    })
}

const GetAllUsers = async () => {
    let rows = await connection.promise().query('select * from defaultdb.tblPERSON');
    return rows[0];
}

const UpdateUser = async () => {
    return "Not created";
}

const DeleteUser = async () => {
    return "Not created";
}

const CreateAdminUser = async () => {
    return "Not created"
}

module.exports = {
    CreateNewUser,
    UpdateUser,
    DeleteUser,
    CreateAdminUser,
    GetAllUsers,
}