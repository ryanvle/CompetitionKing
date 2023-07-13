import {  useState} from "react";
import FutureEventEditable from "./futureEventsEditable";

interface Props{
    ringNumber:number;
}


//fetch info for this group of events here
function FutureEventsEditableList(props:Props){
    const [eventGroupName, setEventGroupName] = useState<string>("Long Fist - International Compulsory Form (101)")
    const [otherRingNumbers, setOtherRingNumbers] = useState<number[]>([2,3]);

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
    //deal with editing shit
    const [toggleEdit, setToggleEdit] = useState<boolean>(false);
    const eventIsSelectedBuilder:boolean[] = new Array<boolean>(futureEventsCompetitors.length).fill(false);
    const [eventIsSelected, setEventIsSelected] = useState<boolean[]>(eventIsSelectedBuilder);


    const handleToggleShowEvents =():void=>{
        setEventsShown(!eventsShown);
    }


    const handleToggleEdit = ():void =>{
        setToggleEdit(!toggleEdit)
    }

    const handleCancelEdit = ():void =>{
        setToggleEdit(false)
    }

    const handleEventSelected = (evt: React.MouseEvent<HTMLButtonElement>):void =>{
        if(toggleEdit){
            let temp: boolean[] =  new Array<boolean>(futureEventsCompetitors.length).fill(true);;
            for(let i = 0; i < eventIsSelected.length; i++){
                if(!("value" in evt.target) || typeof evt.target.value != "string"){
                    throw Error;
                }
                if(i == Number.parseInt(evt.target.value)){
                    temp[i]=(!eventIsSelected[i])
                }else{
                    temp[i]=(eventIsSelected[i])
                }
            }
            setEventIsSelected(temp);
        }

    }

    const handleSendToOtherRing = (evt: React.MouseEvent<HTMLButtonElement>):void =>{
        if(!("value" in evt.target)|| typeof evt.target.value!=="string" ){
            throw Error;
        }
        console.log("endpoint handles send to ring " + evt.target.value)
    }






    let i:number = 0;
    const EventsListElement:JSX.Element[] = []
    if(eventsShown){
        while (i != futureEventsCompetitors.length){
            EventsListElement.push(<FutureEventEditable
                key={i}
                nameList={futureEventsCompetitors[i]}
                eventName = {futureEventNames[i]}
                onClickFunction = {handleEventSelected}
                inSelectMode = {toggleEdit}
                isSelected = {eventIsSelected[i]}
                indexForSelect= {i}
            />)
            i++;
        }
    }

    // editmode
    let numberSelected:number = 0;
    for (var item of eventIsSelected){
        if (item) {
            numberSelected++;
        }
    }

    const moveToRingButtons:JSX.Element[] = []
    for(var otherRingNumber of otherRingNumbers){
        moveToRingButtons.push(<button value={otherRingNumber} onClick={handleSendToOtherRing} key={otherRingNumber}>Send to ring {otherRingNumber}</button>)
    }

    const moveButton:JSX.Element = numberSelected>0?
    <>
        <p>{numberSelected} Events Selected</p>
        {moveToRingButtons}
                <br/>
    </>:
    <><p>Select the events you want to move</p></>

    let editModeBottomButtons:JSX.Element;
    if(toggleEdit){
        editModeBottomButtons=
            <div>
                {moveButton}
                <button onClick={handleCancelEdit}>cancel</button>
            </div>;

    }else{
        editModeBottomButtons = <></>;
    }


    return(
        <div>

            <h2>{eventGroupName} <button onClick={handleToggleShowEvents}>v</button></h2>

            {EventsListElement}
            {editModeBottomButtons}
            <button onClick={handleToggleEdit}>Move Group</button>
        </div>
    );

}

export default FutureEventsEditableList;
