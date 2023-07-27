import { Link, Outlet } from "react-router-dom"

/**
 * TODO css -
 *   flexbox these buttons
 */
function Competition(){
    return(
        <div>
            <h1>Seattle International Martial Arts Competition</h1>
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
