<<<<<<< HEAD
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
    
     
=======
import { ChangeEvent, useEffect, useState} from "react";
import FutureEventsList from "../../components/competition/futureEventsList";
import { Link } from "react-router-dom";
import CurrentlyGoing from "../../components/competition/currentlyGoing";



function Judge(){
    const queryParams = new URLSearchParams(window.location.search);
    const judgeNum = queryParams.get("judgeNumber");
    const ringNumQuery = queryParams.get("ringNumber");
    if(ringNumQuery === null) throw Error;
    const ringNumber:number =  Number.parseInt(ringNumQuery);

    //States that are gonna be changed by endpoint
    // const [competitors, setCompetitors] = useState<string[]>(["Oey","Boey","Joey","Chloey"]);
    // const [category, setCategory] = useState<string>("Advanced Female fiveStance");
    // const [competitorIndex, setCompetitorIndex] = useState<number>(2);

    const [futureEventNames, setFutureEventNames] = useState<string[]>([]);
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([[]]);



    const [scoreInput, setScoreInput] = useState<string>("");

    //when getting load endpoint, set showHide to array of false of length of futureEvents

    useEffect(()=>{
        setFutureEventNames([
            "Advanced Adult Female Changquan",
            "Advanced Adult Female DaoShu",
            "Advanced Adult Female GunShu",
        ]);
        setFutureEventsCompetitors([
            ["Qoey","Woey","Roey","Toey",],
            ["Yoey","Poey","Soey","Loey",],
            ["Foey","Goey","Hoey","Joey",],
        ])
    },[]);
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690

    //HANDLE EVENT FUNCTIONS
    const handleScoreInput = (evt: ChangeEvent<HTMLInputElement>):void => {
            setScoreInput(evt.target.value);
    }
<<<<<<< HEAD
    
    const handleScoreEnterOnClick= ():void => { 
        const score = parseInt(scoreInput);
        
=======

    const handleScoreEnterOnClick= ():void => {
        const score = parseInt(scoreInput);

>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690
        if(Number.isNaN(score)||score<0 || score > 10 ){
            alert("please put a valid score");
        }else{
            console.log(scoreInput);
            //fetch endpoint
        }
    }



<<<<<<< HEAD
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
=======


    //some logic stuff for rendering
    // const currentCommpetitors:JSX.Element[] = competitors.map(item => <p key={useId()}>{item}</p>)




    



    // making the show/hide boxes
    // let i:number = 0;
    // const futureCommpetitors:JSX.Element[] = []
    // while (i != futureEventsCompetitors.length){
    //     futureCommpetitors.push(<FutureEvent
    //         key={futureEventNames[i]}
    //         nameList={futureEventsCompetitors[i]}
    //         eventName = {futureEventNames[i]}
    //     />)
    //     i++;
    // }


    return(
        <>
            <header>
                <Link to={"/competition/manageRings"}>Back </Link>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                <span> Ring {ringNumber} </span>
            </header>
            <h1>Judge {judgeNum}</h1>
            <input type="text" onChange={handleScoreInput}></input>
            <button onClick={handleScoreEnterOnClick}>Enter</button>



            {/* <div>
                <h2> Currently going  </h2>
                <h3>{category}&emsp;&emsp; {competitorIndex}/{competitors.length}</h3>
                {currentCommpetitors}
            </div> */}

            <CurrentlyGoing ringNumber={ringNumber}/>

            <h2>Up Next</h2>
            <FutureEventsList
                futureEventNames={futureEventNames}
                futureEventsCompetitors= {futureEventsCompetitors}
            />

>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690

        </>
    );


<<<<<<< HEAD
    

}


export default Judge;
=======
}


export default Judge
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690


