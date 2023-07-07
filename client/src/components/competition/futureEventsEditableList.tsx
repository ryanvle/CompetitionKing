import {  useState} from "react";
import FutureEventEditable from "./futureEventsEditable";

interface Props{
    ringNumber:number;
}



function FutureEventsEditableList(props:Props){

    const [ringNumber, setRingNumber] = useState<number>();

    const [futureEventNames, setFutureEventNames] = useState<string[]>([
        "Advanced Adult Female Changquan",
        "Advanced Adult Female DaoShu",
        "Advanced Adult Female GunShu",
    ])
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([
        ["Qoey","Woey","Roey","Toey",],
        ["Yoey","Poey","Soey","Loey",],
        ["Foey","Goey","Hoey","Joey",],
    ])

    let i:number = 0;
    const futureCommpetitors:JSX.Element[] = []
    while (i != futureEventsCompetitors.length){
        futureCommpetitors.push(<FutureEventEditable 
            key={futureEventNames[i]}
            nameList={futureEventsCompetitors[i]}
            eventName = {futureEventNames[i]}
        />)
        i++;
    }


    return(
        <div>
            <h2>Up Next</h2>
            {futureCommpetitors}
        </div>
    );

}

export default FutureEventsEditableList;
