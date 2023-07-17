import {  useState} from "react";
import Done from "./done";

interface Props{
    ringNumber:number;
}



function DoneList(props:Props){

    type CompetitorAndScore ={
        name: string;
        score: number;
    };

    const [ringNumber, setRingNumber] = useState<number>();

    const [doneEventNames, setDoneEventNames] = useState<string[]>([
        "Advanced Adult Male Changquan",
        "Advanced Adult Male DaoShu",
        "Advanced Adult Male GunShu",
        "Advanced Adult Male JianShu",
    ])
    const [doneEventsCompetitors, setDoneEventsCompetitors] = useState< CompetitorAndScore[][] >([
        [{name:"oey", score: 8.5},{name:"boey", score: 8.83},{name:"Toey", score: 8.18},],
        [{name:"hoey", score: 8.5},{name:"foey", score: 8.63},{name:"coey", score: 8.84},],
        [{name:"qoey", score: 8.25},{name:"noey", score: 8.32},{name:"roey", score: 8.58},],
        [{name:"poey", score: 8.56},{name:"boey", score: 8.13},{name:"moey", score: 8.68},],
    ])

    let i:number = 0;
    const doneCommpetitors:JSX.Element[] = []
    while (i != doneEventsCompetitors.length){
        doneCommpetitors.push(<Done
            key={doneEventNames[i]}
            nameList={doneEventsCompetitors[i]}
            eventName = {doneEventNames[i]}
        />)
        i++;
    }


    return(
        <div>
            <h2>Done</h2>
            {doneCommpetitors}
        </div>
    );

}

export default DoneList;
