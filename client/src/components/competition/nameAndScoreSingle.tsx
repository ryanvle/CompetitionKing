import { competitor } from './currentlyGoingStaff';

interface Props{
    data: competitor;
}

//makes a name and score thing. rn only used in staff
const NameAndScoreSingle = (props:Props) => {
    const competitorData: competitor = props.data;
    const doneNameAndScoresElement: JSX.Element[] =[];
        let currCompetitor:competitor = competitorData

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
            <div>
                <p>  {competitorData.name}</p>
                {scoresElements}
            </div>)
    


  return (
    <div>
        {doneNameAndScoresElement}
    </div>
  )
}

export default NameAndScoreSingle