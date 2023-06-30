import { ChangeEvent, useState, useId} from "react";
import FutureEvent from "../../components/futureEvents";


function Judge(){
    //States that are gonna be changed by endpoint
    const [isHeadJudge, setIsHeadJudge] = useState<boolean>(false); 
    const [ringNumber, setRingNumber] = useState<number>(1); 
    const [competitors, setCompetitors] = useState<string[]>(["Oey","Boey","Joey","Chloey"]); 
    const [category, setCategory] = useState<string>("Advanced Female fiveStance");
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
    const [judgeScores, setjudgeScores] = useState<number[]>([7.8, 7.9, 7.85,7.75]);


    
    const [scoreInput, setScoreInput] = useState<string>("");  

    //when getting load endpoint, set showHide to array of false of length of futureEvents
    
     

    //HANDLE EVENT FUNCTIONS
    const handleScoreInput = (evt: ChangeEvent<HTMLInputElement>):void => {
            setScoreInput(evt.target.value);
    }
    
    const handleScoreEnterOnClick= ():void => { 
        const score = parseInt(scoreInput);
        
        if(Number.isNaN(score)||score<0 || score > 10 ){
            alert("please put a valid score");
        }else{
            console.log(scoreInput);
            //fetch endpoint
        }
    }

    const handleApproveOnClick = ():void =>{
        console.log("approve onCLick not implemented yet")
    }
    const handleDenyOnClick = ():void =>{
        console.log("deny onCLick not implemented yet")
    }





    //some logic stuff for rendering

    const currentCommpetitors:JSX.Element[] = competitors.map(item => <li key={useId()}>{item}</li>)



    //approve scores
    let judgeScoreElement:JSX.Element;
    if(isHeadJudge){
        const judgeScoreElementList:JSX.Element[] = judgeScores.map(score => <p key={score+""}>{score}</p> )
        judgeScoreElement = 
        <div>
            {judgeScoreElementList} 
            <button  onClick={handleApproveOnClick}>Approve</button>
            <button  onClick={handleDenyOnClick}>Deny</button>
        </div>
    }else{
        judgeScoreElement=<></>
    }
    



    // making the show/hide boxes 
    let i:number = 0;
    const futureCommpetitors:JSX.Element[] = []
    while (i != futureEventsCompetitors.length){
        futureCommpetitors.push(<FutureEvent 
            nameList={futureEventsCompetitors[i]}
            eventName = {futureEventNames[i]}
        />)
        i++;
    }
    

    return(
        <>
            <h1>Judge</h1>
            <h2>Ring {ringNumber}</h2>
            <h2> **competitor Name **</h2>
            <input type="text" onChange={handleScoreInput}></input>
            <button onClick={handleScoreEnterOnClick}>Enter</button>

            {judgeScoreElement}
            <div>
                <h2>{category}</h2>
                <ul>
                    {currentCommpetitors}
                </ul>
            </div>

            <div>
                <h2>Up Next</h2>
                {futureCommpetitors}
            </div>

        </>
    );


    

}


export default Judge


