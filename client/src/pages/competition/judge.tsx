import { ChangeEvent, useState } from "react";


function Judge(){
    //States that are gonna be changed by endpoint
    const [scoreInput, setScoreInput] = useState<string>(""); 
    const [ringNumber, setRingNumber] = useState<number>(1); 
    const [competitors, setCompetitors] = useState<string[]>(["Oey","Boey","Joey","Chloey"]); 
    const [category, setCategory] = useState<string>("Advanced Female fiveStance");
    const [futureEvents, setFutureEvents] = useState<string[][]>([
        ["Qoey","Woey","Roey","Toey",],
        ["Yoey","Poey","Soey","Doey",],
        ["Foey","Goey","Hoey","Joey",],
    ])

    //when getting load endpoint, set showHide to array of false of length of futureEvents
    const [futureEventShown, setfutureEventShown] = useState<boolean[]>([false,true,false,]);
    
     

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



    const handleShowHideFutureCompetitors = (e:any) => {
        const temp:boolean[] = Array();
        for (let i = 0; i < futureEventShown.length; i++) {
            temp[i] = futureEventShown[i];
        }
        temp[e.target.value]= !temp[e.target.value]
        setfutureEventShown(temp);
    }

    //some logic stuff for rendering

    const currentCommpetitors:JSX.Element[] = competitors.map(item => <li key={item}>{item}</li>)

    //making the show/hide boxes 
    let i:number = 0;
    const futureCommpetitors:JSX.Element[] = []
    while (i != futureEvents.length){
        let temp:JSX.Element[];
        if(futureEventShown[i]){
            temp= futureEvents[i].map(competitor=><p>{competitor}</p>)
        }else{
            temp = [<></>];
        }
        futureCommpetitors.push(<>
            {/* <button onClick={handleShowHideFutureCompetitors} value={i} id={i+""}>event Name</button> */}
            <br/>
            <button onClick={handleShowHideFutureCompetitors} value={i+""}> eventName</button>
            {temp}
        </>)

        i++;
    }

    

    return(
        <>
            <h1>Judge</h1>
            <h2>Ring {ringNumber}</h2>
            <h2> **competitor Name **</h2>
            <input type="text" onChange={handleScoreInput}></input>
            <button onClick={handleScoreEnterOnClick}>Enter</button>
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


export default Judge;


