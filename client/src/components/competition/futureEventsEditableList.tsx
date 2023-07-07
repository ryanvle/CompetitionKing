import {  useState} from "react";
import FutureEventEditable from "./futureEventsEditable";

interface Props{
    ringNumber:number;
}



function FutureEventsEditableList(props:Props){

    const [ringNumber, setRingNumber] = useState<number>();
    const [otherRingNumbers, setOtherRingNumbers] = useState<number[]>([2,3]);
    

    const [futureEventNames, setFutureEventNames] = useState<string[]>([
        "Advanced Adult Female Changquan",
        "Advanced Adult Female DaoShu",
        "Advanced Adult Female GunShu",
    ])
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([
        ["Qoey","Woey","Roey","Toey",],
        ["Yoey","Poey","Soey","Loey",],
        ["Foey","Goey","Hoey","Joey",],
    ])


    const [toggleEdit, setToggleEdit] = useState<boolean>(false);
    const eventIsSelectedBuilder:boolean[] = new Array<boolean>(futureEventsCompetitors.length).fill(false);
    const [eventIsSelected, setEventIsSelected] = useState<boolean[]>(eventIsSelectedBuilder);


    
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
    const futureCommpetitors:JSX.Element[] = []
    while (i != futureEventsCompetitors.length){
        futureCommpetitors.push(<FutureEventEditable 
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
            <h2>Up Next <button onClick={handleToggleEdit}>/</button></h2>
            
            {futureCommpetitors}
            {editModeBottomButtons}
        </div>
    );

}

export default FutureEventsEditableList;
