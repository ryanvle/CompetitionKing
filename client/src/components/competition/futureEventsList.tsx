import {  useState} from "react";
import FutureEvent from "./futureEvents";

interface Props{
    futureEventNames: string[];
    futureEventsCompetitors:string[][];
}


//makes a list of events given list of event name sand array of competitors through props
function FutureEventsList(props:Props){

    const [ringNumber, setRingNumber] = useState<number>();

    // const [futureEventNames, setFutureEventNames] = useState<string[]>([
    //     "Advanced Adult Female Changquan",
    //     "Advanced Adult Female DaoShu",
    //     "Advanced Adult Female GunShu",
    // ])
    // const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([
    //     ["Qoey","Woey","Roey","Toey",],
    //     ["Yoey","Poey","Soey","Loey",],
    //     ["Foey","Goey","Hoey","Joey",],
    // ])
    const futureEventNames=props.futureEventNames
    const futureEventsCompetitors=props.futureEventsCompetitors

    let i:number = 0;
    const futureCommpetitors:JSX.Element[] = []
    while (i != futureEventsCompetitors.length){
        futureCommpetitors.push(<FutureEvent
            key={futureEventNames[i]}
            nameList={futureEventsCompetitors[i]}
            eventName = {futureEventNames[i]}
        />)
        i++;
    }


    return(
        <div>
            {futureCommpetitors}
        </div>
    );

}

export default FutureEventsList;
