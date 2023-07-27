import FutureEvent from "./futureEvents";

interface Props{
    futureEventNames: string[];
    futureEventsCompetitors:string[][];
}


//makes a list of events given list of event name sand array of competitors through props
function FutureEventsList(props:Props){

    const futureEventNames=props.futureEventNames
    const futureEventsCompetitors=props.futureEventsCompetitors

    let i:number = 0;
    const futureCommpetitors:JSX.Element[] = []
    while (i != futureEventsCompetitors.length){
        futureCommpetitors.push(<FutureEvent
            key={i}
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
