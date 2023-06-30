const sql = require('./SqlConnection')
const CreateNewCompetition = async (name, desc, fees,) => {
    console.log("name: ", name);
    console.log("description: ", desc);
    console.log("fees: ", JSON.parse(fees));
}
const DeleteCompetition = async () => {
    return "Not created";
}


module.exports = {
    CreateNewCompetition,
    DeleteCompetition,
};