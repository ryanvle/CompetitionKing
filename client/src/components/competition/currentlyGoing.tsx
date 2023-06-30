import { useState } from "react";

interface Props{
    ringNumber:number;
}


function CurrentlyGoing(props:Props){

    
    const [ringNumber, setRingNumber] = useState<number>(props.ringNumber); 
    const [category, setCategory] = useState<string>("male advanced teen nanquan"); 
    const [currentCommpetitors, setCurrentCompetitors] = useState<string[]>(["Oey","Boey","Joey","Stoey"]); 
    const [currentCompetitorIndex, setCcurrentCompetitorIndex] 
        = useState<number>(3); 

    const currentCommpetitorsElement:JSX.Element[] = 
        currentCommpetitors.map(item => <p key={item}>{item}</p>)



    return(
        <div >
            <h2> Currently going</h2>
            <h3>{category}</h3>
            <h4>{currentCompetitorIndex}/{currentCommpetitors.length}</h4>
            {currentCommpetitorsElement}
        </div>

    );

}

export default CurrentlyGoing
