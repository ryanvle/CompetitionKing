import { useState } from "react";
import { competitor } from "./currentlyGoingStaff";
import NamesandScores from "./namesAndScores";

interface Props{
    eventName: string;
    competitorList: competitor[];
}


function DoneEvent(props:Props){


    const [showNames, setShowNames] = useState<boolean>(false);
    const eventName: string = props.eventName;
    const competitorList: competitor[] = props.competitorList;

    const handleShowHideFutureCompetitors = () => {
        setShowNames(!showNames);
    }


    let temp:JSX.Element;
        if(showNames){
            temp= <NamesandScores data={competitorList}/>
        }else{
            temp = <div key ={"e"}></div>;
        }





    return(
        <div>
            <button onClick={handleShowHideFutureCompetitors}  id={eventName+"r"}>
                {eventName} &emsp;&emsp; {competitorList.length}/{competitorList.length}
            </button>
            <br/>
            {temp}
        </div>
    );

}

export default DoneEvent
