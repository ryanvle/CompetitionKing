const connection = require('./SqlConnection')


const CreateNewUser = () => {
    return "Not created";
}

const GetAllUsers = () => {
    const sql = "SELECT * FROM tblGENDER";
    const [rows] = connection.promise().query(sql);
    return rows;
}

const UpdateUser = () => {
    return "Not created";
}

const DeleteUser = () => {
    return "Not created";
}

const CreateAdminUser = () => {
    return "Not created"
}

module.exports = {
    CreateNewUser,
    UpdateUser,
    DeleteUser,
    CreateAdminUser,
    GetAllUsers,
}