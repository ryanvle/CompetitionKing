import { useState } from "react";

type CompetitorAndScore ={
    name: string;
    score: number;
};
interface Props{
    eventName: string;
    nameList: CompetitorAndScore[];
}


function Done(props:Props){

    

    
    const [showNames, setShowNames] = useState<boolean>(false); 
    const [nameList] = useState<CompetitorAndScore[]>(props.nameList); 
    const [EventName] = useState<string>(props.eventName); 

    
    const handleShowHideDoneCompetitors = () => { 
        setShowNames(!showNames);
    }


    let temp:JSX.Element[];
        if(showNames){
            temp= nameList.map(competitor=>
                <div key={"comp"+competitor.name}>
                    <p>{competitor.name}  {competitor.score}</p>
                </div>)
        }else{
            temp = [<div key ={"e"}></div>];
        }


        




    return(
        <div>
            <button onClick={handleShowHideDoneCompetitors}  id={EventName+"r"}>{EventName}</button>
            <br/>
            {temp}
        </div>
    );

}

export default Done
