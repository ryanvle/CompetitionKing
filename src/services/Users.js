const connection = require('./SqlConnection')


const CreateNewUser = async () => {
    return "Not created";
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