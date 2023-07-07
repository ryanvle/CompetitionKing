import { Link, Outlet } from "react-router-dom"


function Competition(){
    return(
        <div>
            <h1>*Event Name</h1>
            <h2>
                <Link to={"/competition/eventInfo"}>Event Info </Link> &emsp;
                <Link to={"/competition/schedule"}>Schedule </Link> &emsp;
                <Link to={"/competition/manageRings"}>Manage Rings </Link>  &emsp;
                <Link to={"/competition/checkIn"}>Check-In </Link> 
            </h2>
            <Outlet/>
        </div>
    );

}

export default Competition
