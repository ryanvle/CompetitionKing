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


        </>
    );


}


export default Judge


