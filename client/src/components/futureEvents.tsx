import { useState } from "react";

interface Props{
    eventName: string;
    nameList: string[];
}


function FutureEvent(props:Props){

    
    const [showNames, setShowNames] = useState<boolean>(false); 
    const [nameList] = useState<string[]>(props.nameList); 
    const [EventName] = useState<string>(props.eventName); 

    
    const handleShowHideFutureCompetitors = () => { 
        setShowNames(!showNames);
    }


    let temp:JSX.Element[];
        if(showNames){
            temp= nameList.map(competitor=><p key={"comp"+competitor}>{competitor}</p>)
        }else{
            temp = [<div key ={"e"}></div>];
        }


        




    return(
        <div key={EventName}>
            <button onClick={handleShowHideFutureCompetitors}  id={EventName+"r"}>{EventName}</button>
            <br/>
            {temp}
        </div>
    );

}

export default FutureEvent
