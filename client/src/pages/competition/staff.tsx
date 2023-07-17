import React from 'react'
import { Link } from 'react-router-dom'
import FutureEventsList from '../../components/competition/futureEventsList';
import CurrentlyGoingStaff from '../../components/competition/currentlyGoingStaff';
import DoneList from '../../components/competition/doneList';

const Staff = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const ringNumQuery = queryParams.get("ringNumber");
    if(ringNumQuery === null) throw Error;
    const ringNumber:number =  Number.parseInt(ringNumQuery);


    return (
        <div>
            <Link to={"/competition/manageRings"}>Back </Link>
            <CurrentlyGoingStaff ringNumber={ringNumber}/>

            <h2>Remaining Events</h2>
            <FutureEventsList ringNumber={ringNumber}></FutureEventsList>

            <DoneList ringNumber={ringNumber}/>
        </div>
    )
}

export default Staff