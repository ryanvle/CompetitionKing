const pool = require('./SqlConnection')
const CreateNewUser = (request,resposne) => {
    //pool.query("INSERT INTO tblFORM (FormID, StyleID, FormName)", [1, 1 ,"sword"]).catch(err => console.log(err))
    return "Not created"
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
}