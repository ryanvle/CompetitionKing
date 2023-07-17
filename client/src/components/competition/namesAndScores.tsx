import React from 'react'
import { competitor } from './currentlyGoingStaff';

interface Props{
    data: competitor[];
}

//makes a list of names and scores for an event
const NamesandScores = (props:Props) => {
    const competitorData: competitor[] = props.data;
    const doneNameAndScoresElement: JSX.Element[] =[];
    for (let i = 0; i<competitorData.length; i++){
        let currCompetitor:competitor = competitorData[i]

        //make scores elements
        let scoresElements:JSX.Element[]=[]
        for (let j = 0; j<currCompetitor.scores.length; j++){
            scoresElements.push(
                <span key={j}>{currCompetitor.scores[j].toFixed(2)}   </span>
            );
        }
        scoresElements.push(
            <span key={"x"}>{currCompetitor.finalScore}   </span>
        );


        doneNameAndScoresElement.push(
            <div key={i}>
                <p>{i+1}.  {competitorData[i].name}</p>
                {scoresElements}
            </div>)
    }


  return (
    <div>
        {doneNameAndScoresElement}
    </div>
  )
}

export default NamesandScores