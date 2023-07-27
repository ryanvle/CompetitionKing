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
    {border: '4px solid #646cff' }: {};






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
        <div className="bordered">
            <div
                onClick={() =>{handleToggleShowEvents(props.indexForSelect)}}
                style={selectedBorder}>

                <h3
                id={eventGroupName+"r"}
                >
                    {eventGroupName} &emsp;&emsp;
                    <img
                        className="showHideIcon"
                        src="../src/assets/IconLibrary/navRightArrow.png"
                        style={{
                            transform: "rotate("+ (eventsShown? 90: -90) +"deg)"}}
                    />
                </h3>
            </div>
            {EventsListElement}
        </div>
    );

}

export default FutureEventsEditableList;
