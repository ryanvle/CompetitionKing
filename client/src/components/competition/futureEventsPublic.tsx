import { useState } from "react";

interface Props{
    eventName: string;
    nameList: string[];

}

//represents one event that is editable in schedule
function FutureEventPublic(props:Props){


    const [toggleEventExpanded, setToggleEventExpanded] = useState<boolean>(false);
    const [nameList] = useState<string[]>(props.nameList);
    const [EventName] = useState<string>(props.eventName);

    const handleShowHideFutureCompetitors = () => {
        setToggleEventExpanded(!toggleEventExpanded);

    }








    //make the stuff that shows when you expand the event to see the competitors and stuff
    let temp:JSX.Element;
    if(toggleEventExpanded){
        const currentCommpetitorsElement:JSX.Element[] =
            nameList.map(competitor => <p key={competitor}>{competitor}</p>)

        temp = <div>{currentCommpetitorsElement}</div>
    }else{
        temp = <div></div>;
    }


    return(
        <div >
            <button onClick={handleShowHideFutureCompetitors}>
                {EventName}&emsp;&emsp; {nameList.length}/{nameList.length}
            </button>
            <br/>
            {temp}
        </div>
    );

}

export default FutureEventPublic;
