<<<<<<< HEAD
import { Outlet } from "react-router-dom"
=======
import { Link, Outlet } from "react-router-dom"
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690


function Competition(){
    return(
        <div>
<<<<<<< HEAD
            {/* <header>Competition</header> */}
=======
            <h1>*Event Name</h1>
            <h2>
                <Link to={"/competition/eventInfo"}>Event Info </Link> &emsp;
                <Link to={"/competition/schedule"}>Schedule </Link> &emsp;
                <Link to={"/competition/manageRings"}>Manage Rings </Link>  &emsp;
                <Link to={"/competition/checkIn"}>Check-In </Link> 
            </h2>
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690
            <Outlet/>
        </div>
    );

}

export default Competition
