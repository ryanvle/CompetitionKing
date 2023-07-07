import { useState } from "react";
import CurrentlyGoing from "./currentlyGoing";
import DoneList from "./doneList";
import FutureEventsEditableList from "./futureEventsEditableList";

interface Props{
    ringNumber: number
}


function ScheduleColumn(props:Props){

    
    const ringNumber=props.ringNumber; 
    


    return(
        <div>
                <h2>Ring {ringNumber}</h2>
                
                <CurrentlyGoing ringNumber={ringNumber}/>

                <FutureEventsEditableList ringNumber={ringNumber}/>
                <DoneList ringNumber={ringNumber}/>
        </div>
    );

}

export default ScheduleColumn
