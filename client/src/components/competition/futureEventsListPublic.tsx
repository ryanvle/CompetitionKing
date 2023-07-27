import {  useEffect, useState} from "react";
import FutureEventPublic from "./futureEventsPublic";

interface Props{
    ringNumber:number;
    eventGroupNameFromProp: string
}

//represents an event group in schedule
function FutureEventsListPublic(props:Props){

    const eventGroupName = props.eventGroupNameFromProp;

    //fetch info for this group of events in this function
    const [futureEventNames, setFutureEventNames] = useState<string[]>([]);
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([]);


    const [eventsShown, setEventsShown] = useState<boolean>(false);



    useEffect(()=>{
        setFutureEventNames([
            "Long Fist - Beginner Adult Women (B.A.W)",
            "Long Fist - Female Beginner Child (F.B.C)",
            "Long Fist - Female Beginner Child (F.B.C)",
            "Long Fist - Female Beginner Child (F.B.C)",
        ]);

        setFutureEventsCompetitors([
            ["Qoey","Woey","Roey","Toey",],
            ["Yoey","Poey","Soey","Loey",],
            ["Foey","Goey","Hoey","Joey",],
        ]);
    },[])

    const handleToggleShowEvents =():void=>{
        setEventsShown(!eventsShown);
    }





    let i:number = 0;
    const EventsListElement:JSX.Element[] = []
    if(eventsShown){
        while (i != futureEventsCompetitors.length){
            EventsListElement.push(<FutureEventPublic
                key={i}
                nameList={futureEventsCompetitors[i]}
                eventName = {futureEventNames[i]}
            />)
            i++;
        }
    }



    return(
        <div>

            <h3> <button onClick={() =>{handleToggleShowEvents()}}
             id={eventGroupName+"r"}
            >{eventGroupName} &emsp;&emsp; v</button></h3>

            {EventsListElement}
        </div>
    );

}

export default FutureEventsListPublic;
