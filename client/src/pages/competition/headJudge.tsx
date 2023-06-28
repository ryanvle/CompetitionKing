import { ChangeEvent, useState } from "react";


function HeadJudge(){
    //States
    const [scoreInput, setScoreInput] = useState<string>(""); 
    const [ringNumber, setRingNumber] = useState<number>(1); 
    const [competitors, setCompetitors] = useState<string[]>(["Oey","Boey","Joey","Chloey"]); 
    const [category, setCategory] = useState<string>("Advanced Female fiveStance");

    
     

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





    return(
        <>
            <h1>Head Judge</h1>
            <h2>Ring {ringNumber}</h2>
            <h2> **competitor Name **</h2>
            <input type="text" onChange={handleScoreInput}></input>
            <button onClick={handleScoreEnterOnClick}>Enter</button>
            <div>
                <h2>{category}</h2>
                <ul>
                {competitors.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </>
    );


    

}


export default HeadJudge


