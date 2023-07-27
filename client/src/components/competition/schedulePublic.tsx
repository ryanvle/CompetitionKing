import { useEffect, useState } from "react";
import FutureEventsListPublic from "./futureEventsListPublic";

function SchedulePublic(){


    //for toggle ring buttons
    const [ringCount, setRingCount] = useState<number>(3)
    const [ringNumber, setRingNumber] = useState<number>(1)


    //for switching rings
    const handleSwitchRing =(ringNum:number):void =>{
        setRingNumber(ringNum);

    }





    //ALL THIS STUFF WAS THE STUFF THAT USED TO BE INSIDE A COLUMN

    //these states need to be updated in fetch!!!
    const [eventGroups, setEventGroups] = useState<string[]>([]);

    //for the info at the top div
    const [ringLevel, setRingLevel] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");



    useEffect(() => {

        const dataForEventGroups: string[] = [
            "Long Fist - International Compulsory Form (101)",
            "Long Fist - International Compulsory Form (101)",
            "Long Fist - International Compulsory Form (101)",
            "Long Fist - International Compulsory Form (101)",
        ]

        setRingCount(3);
        setEventGroups(dataForEventGroups);
        setRingLevel("Beginner/Intermediate");
        setStartTime("0:00");

    }, [])








    //make the Groups elements
    let i:number = 0;
    const EventGroupsListElement:JSX.Element[] = []

    while (i != eventGroups.length){
        EventGroupsListElement.push(<FutureEventsListPublic
            key={i}
            ringNumber={ringNumber}
            eventGroupNameFromProp = {eventGroups[i]}
        />)
        i++;
    }









    const switchRingElements: JSX.Element[] = []
    for (let i = 1; i <= ringCount; i++){
        switchRingElements.push(
            <button onClick={()=>{handleSwitchRing(i)}}  key={i}>Ring {i}</button>
        )
    }

    return(
        <div>

            {switchRingElements}

            <div>
                <div>
                    <h2>Ring {ringNumber} Schedule</h2>
                    <p><strong>Ring Level: </strong>{ringLevel}</p>
                    <p><strong>Start Time: </strong>{startTime}</p>
                </div>
                {EventGroupsListElement}

            </div>

            <br/>
            <br/>
            <br/>
        </div>
    );

}

export default SchedulePublic
