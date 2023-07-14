import { ChangeEvent, useState } from "react";

interface Props{
    eventName: string;
    nameList: string[];
    
}


function FutureEventEditable(props:Props){

    
    const [toggleEventExpanded, setToggleEventExpanded] = useState<boolean>(false); 
    const [nameList] = useState<string[]>(props.nameList); 
    const [EventName] = useState<string>(props.eventName); 

    const [toggleEdit, setToggleEdit] = useState<boolean>(  );
    const [addPersonInputText, setAddPersonInputText] = useState<string>("");

    const handleShowHideFutureCompetitors = (evt: React.MouseEvent<HTMLButtonElement>) => {
        // if(! props.inSelectMode){
        setToggleEventExpanded(!toggleEventExpanded);
        setToggleEdit(false)

        // }
    }

    const handleToggleEdit = ():void =>{
        // if(! props.inSelectMode){
            setToggleEdit(!toggleEdit)
            setToggleEventExpanded(true)
        // }
    }

    const handleDeletePerson = (evt:React.MouseEvent<HTMLButtonElement>):void =>{
        //deletethis
        if(! ("value" in evt.target) || evt.target.value === ""){
            throw Error("I'm an error");
        }
        console.log("endpoint removes " + evt.target.value)
    }

    const handleAddPersonInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setAddPersonInputText(evt.target.value);
    }

    const handleAddPersonButton= ():void => {
        if(addPersonInputText === ""){
            alert("please put in a name")
        }
        console.log("endpoint adds " + addPersonInputText)
        setAddPersonInputText("");
    }









    //make the stuff that shows when you expand the event to see the competitors and stuff
    let temp:JSX.Element;
    if(toggleEventExpanded){
        const currentCommpetitorsElement:JSX.Element[] = toggleEdit?
            nameList.map(competitor => <p key={competitor}>{competitor}
                <button value={competitor} onClick={handleDeletePerson}>-</button></p>):
            nameList.map(competitor => <p key={competitor}>{competitor}</p>)

        const addCompetitorElement: JSX.Element = toggleEdit?
            <div>
                <input type="text" value={addPersonInputText} onChange={handleAddPersonInput}></input>
                <button onClick={handleAddPersonButton}>+</button>
            </div>:
            <></>
        temp = <div>
            {currentCommpetitorsElement}
            {addCompetitorElement}
        </div>


    }else{
        temp = <div></div>;
    }


    return(
        <div >
            <button onClick={handleShowHideFutureCompetitors}

             >
                {EventName}&emsp;&emsp; {nameList.length}/{nameList.length}
            </button>
            <button onClick={handleToggleEdit } >/</button>
            <br/>
            {temp}
        </div>
    );

}

export default FutureEventEditable;
