import { Link, Outlet } from "react-router-dom"


function Results(){
    return(
        <div>
            <Link to={"/competition/schedule"}>Back </Link>
            <h1>Results</h1>
            <h2>
                <Link to={"/competition/results/finishedEvents"}>Finished Events </Link> &emsp;
                <Link to={"/competition/results/grandChampion"}>Grand Champion </Link> &emsp;
            </h2>
            <Outlet/>
        </div>
    );

}

export default Results
