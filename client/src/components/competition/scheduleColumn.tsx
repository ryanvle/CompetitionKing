import { useState } from "react";
import CurrentlyGoing from "./currentlyGoing";
import DoneList from "./doneList";
import FutureEventsEditableList from "./futureEventsEditableList";
import { Link } from "react-router-dom";

interface Props{
    ringNumber: number
}


function ScheduleColumn(props:Props){

    const ringNumber=props.ringNumber;

    //these states need to be updated in fetch!!!
    const [eventGroups, setEventGroups] = useState<string[]>
        ([
            "Long Fist - International Compulsory Form (101)",
            "Long Fist - International Compulsory Form (101)",
            "Long Fist - International Compulsory Form (101)",
            "Long Fist - International Compulsory Form (101)",
        ]);

    //for the info at the top div
    const [ringLevel, setRingLevel] = useState<string>("Beginner/Intermediate");
    const [startTime, setStartTime] = useState<string>("0:00");


    const [otherRingNumbers, setOtherRingNumbers] = useState<number[]>([2,3]);
    //these states dont need to be changed in the initial fetch
    const [toggleEdit, setToggleEdit] = useState<boolean>(false);
    const eventIsSelectedBuilder:boolean[] = new Array<boolean>(eventGroups.length).fill(false);
    const [groupIsSelected, setGroupIsSelected] = useState<boolean[]>(eventIsSelectedBuilder);


    //update groupIsSelected when someone clicks on a group to send to another ring
    const handleGroupSelected = (evt: React.MouseEvent<HTMLButtonElement>):void =>{
        if(toggleEdit){
            let temp: boolean[] =  new Array<boolean>(eventGroups.length).fill(true);;
            for(let i = 0; i < groupIsSelected.length; i++){
                if(!("value" in evt.target) || typeof evt.target.value != "string"){
                    throw Error;
                }
                if(i == Number.parseInt(evt.target.value)){
                    temp[i]=(!groupIsSelected[i])
                }else{
                    temp[i]=(groupIsSelected[i])
                }
            }
            setGroupIsSelected(temp);
        }

    }

    //go in/out of edit mode for moving to ring
    const handleToggleEdit = ():void =>{
        setToggleEdit(!toggleEdit)
    }

    //go out of edit mode
    const handleCancelEdit = ():void =>{
        setToggleEdit(false)
    }

    //FETCH ENDPOINT send group to another ring
    const handleSendToOtherRing = (evt: React.MouseEvent<HTMLButtonElement>):void =>{
        if(!("value" in evt.target)|| typeof evt.target.value!=="string" ){
            throw Error;
        }
        console.log("endpoint handles send to ring " + evt.target.value)
    }

    //make the Groups elements
    let i:number = 0;
    const EventGroupsListElement:JSX.Element[] = []

    while (i != eventGroups.length){
        EventGroupsListElement.push(<FutureEventsEditableList
            key={i}
            ringNumber={ringNumber}
            eventGroupNameFromProp = {eventGroups[i]}
            onClickFunction = {handleGroupSelected}
            inSelectMode = {toggleEdit}
            isSelected = {groupIsSelected[i]}
            indexForSelect= {i}
        />)
        i++;
    }




    // editmode
    let numberSelected:number = 0;
    for (var item of groupIsSelected){
        if (item) {
            numberSelected++;
        }
    }

    //make all buttons for editing at the bottom
    const moveToRingButtons:JSX.Element[] = []
    for(var otherRingNumber of otherRingNumbers){
        moveToRingButtons.push(<button value={otherRingNumber} onClick={handleSendToOtherRing} key={otherRingNumber}>Send to ring {otherRingNumber}</button>)
    }

    const moveButton:JSX.Element = numberSelected>0?
    <>
        <p>{numberSelected} Groups Selected</p>
        {moveToRingButtons}
                <br/>
    </>:
    <><p>Select the groups you want to move</p></>

    let editModeBottomButtons:JSX.Element;
    if(toggleEdit){
        editModeBottomButtons=
            <div>
                {moveButton}
                <button onClick={handleCancelEdit}>cancel</button>
            </div>;

    }else{
        editModeBottomButtons =
        <button onClick={handleToggleEdit}>Move Group</button>;
    }



    return(
        <div>
            <div>
                <h2>Ring {ringNumber} Schedule</h2>
                <p><strong>Ring Level: </strong>{ringLevel}</p>
                <p><strong>Start Time: </strong>{startTime}</p>
                <p><strong>Results: </strong>
                    <Link to={"/competition/eventInfo"}>Finished Events </Link> &emsp;
                    <Link to={"/competition/schedule"}>Grand Champion </Link> &emsp;
                </p>

            </div>

            {EventGroupsListElement}

            {editModeBottomButtons}
            <DoneList ringNumber={ringNumber}/>
        </div>
    );

}

export default ScheduleColumn
