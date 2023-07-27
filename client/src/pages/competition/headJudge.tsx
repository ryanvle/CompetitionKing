import { ChangeEvent, useEffect, useState} from "react";
import CurrentlyGoing from "../../components/competition/currentlyGoing";
import FutureEventsList from "../../components/competition/futureEventsList";
import { Link } from "react-router-dom";


function HeadJudge(){
    const queryParams = new URLSearchParams(window.location.search);
    const ringNumQuery = queryParams.get("ringNumber");
    if(ringNumQuery === null) throw Error;
    const ringNumber:number =  Number.parseInt(ringNumQuery);


    //States that are gonna be changed by endpoint
    const [judgesList, setJudgesList] = useState<string[]>([]);
    const [judgeScores, setjudgeScores] = useState<number[]>([]);



    const [averageScore, setAverageScore] = useState<number>();
    const [showAverageScore, setShowAverageScore] = useState<boolean>(false);


    // const [competitors, setCompetitors] = useState<string[]>(["Oey","Boey","Joey","Chloey"]);    // const [category, setCategory] = useState<string>("Advanced Female fiveStance");

    const [futureEventNames, setFutureEventNames] = useState<string[]>([])
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([])


    useEffect(()=>{
        setJudgesList(["Oey","Nicholas","Ryan","Brian"]);
        setjudgeScores([7.8, 7.9, 7.85,7.75]);
        setFutureEventNames([
            "Advanced Adult Female Changquan",
            "Advanced Adult Female DaoShu",
            "Advanced Adult Female GunShu",
        ]);
        setFutureEventsCompetitors([
            ["Qoey","Woey","Roey","Toey",],
            ["Yoey","Poey","Soey","Loey",],
            ["Foey","Goey","Hoey","Joey",],
        ]);
    },[]);


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
        const score = parseInt(scoreInput);
        if (Number.isNaN(score)){
            alert("your input score was invalid")
        }else{
            let max:number = score;
            let min:number = score;
            let sum:number = score;
            for(var val of judgeScores){
                sum += val;
                max = Math.max(max, val);
                min = Math.min(max, val);
            }
            setAverageScore(
                Math.trunc(100*(sum-max-min)/3)/100)
            if(!Number.isNaN(averageScore)){
                setShowAverageScore(true)
            }
        }

    }
    const handleDenyOnClick = ():void =>{
        console.log("deny onCLick not implemented yet")
    }





    //some logic stuff for rendering

    //get rid of this later
    const judgesStyle = {
        display: "inline-block",
        margin: 10,
        fontSize: "10px"
    }

    //judges elements
    const judgesElements: JSX.Element[] = judgesList.map(judge =>
        <div style ={judgesStyle} key={judge}>
            <img src="data:image/jpeg;base64,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"
            style={{height :20}}/>
            <p >{judge}</p>

        </div>
    )
    const showAveragePopupElement: JSX.Element = showAverageScore? <span
                style={{"position": "absolute",
                        "backgroundColor": "#fff"}}
                id="myPopup">
                    {averageScore}
            </span>: <></>


    // const currentCommpetitors:JSX.Element[] = competitors.map(item => <li key={useId()}>{item}</li>)

    //approve scores
    const judgeScoreElement:JSX.Element[] =  judgeScores.map(score =>
        <span key={score+""}>{score} &emsp;</span> )

    // making the show/hide boxes


    // let i:number = 0;
    // const futureCommpetitors:JSX.Element[] = []
    // while (i != futureEventsCompetitors.length){
    //     futureCommpetitors.push(<FutureEvent
    //         nameList={futureEventsCompetitors[i]}
    //         eventName = {futureEventNames[i]}
    //     />)
    //     i++;
    // }



    return(
        <>
            <header>
                <Link to={"/competition/manageRings"}>Back </Link>
            </header>
                <h1>Head Judge</h1>
                <h2>Ring {ringNumber}</h2>
            <input type="text" onChange={handleScoreInput}></input>
            <button onClick={handleScoreEnterOnClick}>Enter</button>

            <div>
                {showAveragePopupElement}
                {judgesElements}
                <br/>
                {judgeScoreElement}
                <br/>
                <br/>
                <button  onClick={handleApproveOnClick}>Approve</button>
                <button  onClick={handleDenyOnClick}>Deny</button>
            </div>
            <CurrentlyGoing ringNumber={ringNumber}/>

            <h2>Up Next</h2>
            <FutureEventsList
                futureEventNames={futureEventNames}
                futureEventsCompetitors= {futureEventsCompetitors}
            />

        </>
    );



}


export default HeadJudge


