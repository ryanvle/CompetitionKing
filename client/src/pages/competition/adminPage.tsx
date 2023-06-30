import { Link } from "react-router-dom";


function AdminPage(){
    return(
        <>
            <h1>Admin Page</h1>
            <h2><Link to={"/competition/ringManagement"}>Ring management </Link> </h2>
            <h2><Link to={"/competition/judge"}>Judges Page </Link> </h2>
            <h2><Link to={"/competition/tv"}>Scores/Schedule </Link> </h2>
            <h2><Link to={"/competition/checkIn"}>Check-In </Link> </h2>
            <h2><Link to={"/competition/"}>Contact (not real yet) </Link> </h2>
        
        </>
    );

}

export default AdminPage
