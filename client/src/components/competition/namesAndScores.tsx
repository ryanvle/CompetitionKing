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
            const currScore:number = currCompetitor.scores[j];

            const fixedAmount: number = Math.round(currScore*100) %10===0? 1:2;
            const scoreString:string = currScore>0?
                ""+currScore.toFixed(fixedAmount):"x";
            scoresElements.push(
                <span key={j}>{scoreString}   </span>
            );
        }

        const finalScoreString:string = currCompetitor.finalScore>0?
            ""+currCompetitor.finalScore:"x"
        scoresElements.push(
            //this one will be css'd differently
            <span key={"x"}>{finalScoreString}   </span>
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