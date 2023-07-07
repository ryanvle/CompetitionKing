import { useState } from "react";
import ScheduleColumn from "../../components/competition/scheduleColumn";
import { Link } from "react-router-dom";

function Schedule(){

    

    const [ringCount, setRingCount] = useState<number>(3)
    const [ringShown, setRingShown] = useState<number>(1)


    const handleSwitchRing =(evt: React.MouseEvent<HTMLButtonElement>):void =>{
        if(!("value" in evt.target) || typeof evt.target.value != "string"){
            throw Error();
        }
        setRingShown(Number.parseInt(evt.target.value));
    }

    
    const switchRingElements: JSX.Element[] = []
    for (let i = 1; i <= ringCount; i++){
        switchRingElements.push(
            <button onClick={handleSwitchRing} value={i} key={i}>Ring {i}</button>
        )
    }

    return(
        <>
            <h1>Schedule</h1>

            {switchRingElements}

            <div>
                <ScheduleColumn ringNumber={ringShown}/>
            </div>

            <br/>
            <br/>
            <br/>
            <button><Link to={"/competition/tv"}> TV Mode</Link></button>
            <button>Post/Send</button>

        </>
    );

}

export default Schedule