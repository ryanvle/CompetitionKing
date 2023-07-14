import {  useState} from "react";
import FutureEventEditable from "./futureEventsEditable";

interface Props{
    ringNumber:number;
    eventGroupNameFromProp: string
    onClickFunction: (evt: React.MouseEvent<HTMLButtonElement>)=>void;
    isSelected: boolean;
    indexForSelect:number;
    inSelectMode: boolean;
}


//fetch info for this group of events here
function FutureEventsEditableList(props:Props){
    const eventGroupName = props.eventGroupNameFromProp;

    const [futureEventNames, setFutureEventNames] = useState<string[]>([
        "Long Fist - Beginner Adult Women (B.A.W)",
        "Long Fist - Female Beginner Child (F.B.C)",
        "Long Fist - Female Beginner Child (F.B.C)",
        "Long Fist - Female Beginner Child (F.B.C)",
    ])
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([
        ["Qoey","Woey","Roey","Toey",],
        ["Yoey","Poey","Soey","Loey",],
        ["Foey","Goey","Hoey","Joey",],
    ])


    const [eventsShown, setEventsShown] = useState<boolean>(false);



    const handleToggleShowEvents =(evt: React.MouseEvent<HTMLButtonElement>):void=>{
        if(! props.inSelectMode){
            setEventsShown(!eventsShown);
        }
        props.onClickFunction(evt);
    }



    const selectedBorder = props.isSelected && props.inSelectMode?
    {border: '2px solid #DFC5FE' }: {}






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

            <h2> <button onClick={handleToggleShowEvents}
            value= {props.indexForSelect} id={eventGroupName+"r"} style={selectedBorder}
            >{eventGroupName} &emsp;&emsp; v</button></h2>

            {EventsListElement}
        </div>
    );

}

export default FutureEventsEditableList;
