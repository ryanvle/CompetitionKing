import { ChangeEvent, useState } from "react";

interface Props{
    eventName: string;
    nameList: string[];

}

//represents one event that is editable in schedule
function FutureEventEditable(props:Props){


    const [toggleEventExpanded, setToggleEventExpanded] = useState<boolean>(false);
    const [nameList] = useState<string[]>(props.nameList);
    const [EventName] = useState<string>(props.eventName);

    const [toggleEdit, setToggleEdit] = useState<boolean>(  );
    const [addPersonInputText, setAddPersonInputText] = useState<string>("");

    const handleShowHideFutureCompetitors = () => {
        setToggleEventExpanded(!toggleEventExpanded);
        setToggleEdit(false)
    }

    const handleToggleEdit = ():void =>{
        setToggleEdit(!toggleEdit)
        setToggleEventExpanded(true)
    }

    const handleDeletePerson = (competitor:string):void =>{
        //FETCH remove person
        console.log("endpoint removes " + competitor)
    }

    const handleAddPersonInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setAddPersonInputText(evt.target.value);
    }

    const handleAddPersonButton= ():void => {
        if(addPersonInputText === ""){
            alert("please put in a name")
        }
        //FETCH add person
        console.log("endpoint adds " + addPersonInputText)
        setAddPersonInputText("");
    }




    //make the stuff that shows when you expand the event to see the competitors and stuff
    let temp:JSX.Element;
    if(toggleEventExpanded){
        const currentCommpetitorsElement:JSX.Element[] = toggleEdit?
            nameList.map(competitor => <p key={competitor}>{competitor}
                <button  onClick={()=>{handleDeletePerson(competitor)}}>-</button></p>):
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
        <div className="bordered">
            <p>
                {EventName}&emsp;&emsp; {nameList.length}/{nameList.length} &emsp;
                <img
                    className="showHideIcon"
                    onClick={handleToggleEdit}
                    src="../src/assets/IconLibrary/🦆 icon _edit_.png"
                />
                &emsp; &emsp;
                <img
                    onClick={handleShowHideFutureCompetitors}
                    className="showHideIcon"
                    src="../src/assets/IconLibrary/navRightArrow.png"
                    style={{
                        transform: "rotate("+ (toggleEventExpanded? 90: -90) +"deg)"}}
                />
            </p>

            {/* <br/> */}
            {temp}
        </div>
    );

}

export default FutureEventEditable;
