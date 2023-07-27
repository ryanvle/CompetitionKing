import {  useEffect, useState} from "react";
import FutureEventEditable from "./futureEventsEditable";

interface Props{
    ringNumber:number;
    eventGroupNameFromProp: string
    onClickFunction: (targetIndex:number)=>void;
    isSelected: boolean;
    indexForSelect:number;
    inSelectMode: boolean;
}

//represents an event group in schedule
function FutureEventsEditableList(props:Props){

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

    const handleToggleShowEvents =(indexForSelect:number):void=>{
        if(! props.inSelectMode){
            setEventsShown(!eventsShown);
        }
        props.onClickFunction(indexForSelect);
    }



    const selectedBorder = props.isSelected && props.inSelectMode?
    {border: '2px solid #DFC5FE' }: {};






    let i:number = 0;
    const EventsListElement:JSX.Element[] = []
    if(eventsShown){
        while (i != futureEventsCompetitors.length){
            EventsListElement.push(<FutureEventEditable
                key={i}
                nameList={futureEventsCompetitors[i]}
                eventName = {futureEventNames[i]}
            />)
            i++;
        }
    }



    return(
        <div>

            <h3> <button onClick={() =>{handleToggleShowEvents(props.indexForSelect)}}
             id={eventGroupName+"r"} style={selectedBorder}
            >{eventGroupName} &emsp;&emsp; v</button></h3>

            {EventsListElement}
        </div>
    );

}

export default FutureEventsEditableList;
