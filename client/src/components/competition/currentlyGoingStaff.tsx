import {useState} from 'react'
import NamesandScores from './namesAndScores';

interface Props{
    ringNumber:number
}


export type competitor ={
    name: string;
    scores: number[];
    finalScore: number;
}


const CurrentlyGoingStaff = (props:Props) => {
    const ringNumber= props.ringNumber;

    //FETCH this stuff

    const [currentEventName, setCurrentEventName] = useState<string>("Boys 5 Stance");
    const [competitorsDoneData, setCompetitorsDoneData] = useState<competitor[]>([
        {name:"Oey Chang", scores: [8.2,8.55,8.7,8.6,8.9], finalScore: 8.6 },
        {name:"Qoey Chang", scores: [8.4,8.2,8.7,8.2,8.0], finalScore: 8.27 },
        {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,-1], finalScore: -1 },
    ]);

    const [futureCompetitors, setFutureCompetitors] = useState<string[]>
        (["Poey Chang","Voey Chang"]);


    // const [competitorNames, setCompetitorNames] =useState<string[]>(
    //     ["Oey Chang","Qoey Chang","Toey Chang","Poey Chang","Voey Chang",]);
    //invariants of this thing
    //first len-1 scores are the scores of the judges, last score is average
    //length of scores -1 = index of current competitor
    //for the last array, if the competitor has unfilled in scores, it will be a negative number
    // if any of the judges scores are not filled in (negative), the final score is also negative
    // const [scores, setScores] =useState<number[][]>([
    //     [8.2,8.5,8.7,8.6,8.9, 8.6],
    //     [8.4,8.2,8.7,8.2,8.0, 8.27],
    //     [8.1,8.4,8.7,8.1,8.4, 8.3],
    //     // [8.5,8.4,8.0,8.6,8.1],
    // ]);


    const currentCompetitorIndex= competitorsDoneData.length-1;




    // make remaining competitors list
    const remainingCompetitorsListElement: JSX.Element[] =[];
    for (let i = 0; i<futureCompetitors.length; i++){
        remainingCompetitorsListElement.push(
            <p key={i}>{i+2+currentCompetitorIndex}.  {futureCompetitors[i]}</p>
        );
    }


    const sortedData = competitorsDoneData.slice();
    sortedData.sort((a,b)=> b.finalScore-a.finalScore);



    return (
        <div>
            <h4>
                {currentEventName} {currentCompetitorIndex+1}
                /{competitorsDoneData.length+futureCompetitors.length}
            </h4>
            <br/>
            {competitorsDoneData[currentCompetitorIndex].name}
            <br/>
            <NamesandScores data={[competitorsDoneData[currentCompetitorIndex]]}/>
            {remainingCompetitorsListElement}
            <h3>Rankings</h3>
            <NamesandScores data={sortedData}/>
        </div>
    )
}

export default CurrentlyGoingStaff