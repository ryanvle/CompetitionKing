const connection = require('./SqlConnection')
const CreateNewCompetition = async (name, desc, fees,) => {
    try {
        console.log("name: ", name);
        console.log("description: ", desc);
        console.log("fees: ", JSON.parse(fees));
        await connection.promise().query('select * from defaultdb.tblPERSON');
    } catch(e) {
        return (e);
    }
}
const DeleteCompetition = async () => {
    return "Not created";
}


module.exports = {
    CreateNewCompetition,
    DeleteCompetition,
};