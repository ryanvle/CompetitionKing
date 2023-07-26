import { useEffect, useState } from 'react'
import DoneEvent from '../../components/competition/doneEvent';
import { wushuEvent } from '../../pages/competition/staff';
import NamesandScores from './namesAndScores';
import { competitor } from './currentlyGoingStaff';


interface Props{
    ringNumber: number
}
const FinishedEventsColumn = (props:Props) => {
    const ringNumber = props.ringNumber;


    //fetch these
    const [doneData, setDoneData] = useState<wushuEvent[]>([]);

    const [currentData, setCurrentData] = useState<competitor[]>([]);

    useEffect(()=>{
        ringNumber //used
        setDoneData([
            {
                eventName: "Five Stance - Beginner Adult Men",
                competitors: [
                    {name:"Oey Chang", scores: [8.2,8.5,8.7,8.6,8.9], finalScore: 8.6 },
                    {name:"Qoey Chang", scores: [8.4,8.2,8.7,8.2,8.0], finalScore: 8.27 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                ]
            },
            {
                eventName: "Five Stance - Beginner Adult Women",
                competitors: [
                    {name:"Oey Chang", scores: [8.2,8.5,8.7,8.6,8.9], finalScore: 8.6 },
                    {name:"Qoey Chang", scores: [8.4,8.2,8.7,8.2,8.0], finalScore: 8.27 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                ]
            },
            {
                eventName: "Five Stance - Advanced Adult Men",
                competitors: [
                    {name:"Oey Chang", scores: [8.2,8.5,8.7,8.6,8.9], finalScore: 8.6 },
                    {name:"Qoey Chang", scores: [8.4,8.2,8.7,8.2,8.0], finalScore: 8.27 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                    {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                ]
            }
        ]);
        setCurrentData([
            {name:"Oey Chang", scores: [8.2,8.5,8.7,8.6,8.9], finalScore: 8.6 },
            {name:"Qoey Chang", scores: [8.4,8.2,8.7,8.2,8.0], finalScore: 8.27 },
            {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
        ]);
    },[])

    const doneElement: JSX.Element[]=[];
        for (let i = 0; i < doneData.length; i++){
            const doneEventData = doneData[i];
            const sortedData = doneEventData.competitors.slice();
            sortedData.sort((a,b)=> b.finalScore-a.finalScore);
            doneElement.push(
                <DoneEvent
                    key={i}
                    eventName={doneEventData.eventName}
                    competitorList={doneEventData.competitors}
                />
            );
        }


    const sortedData:competitor[] = currentData.slice(0);
    sortedData.sort((a,b)=> b.finalScore-a.finalScore);
    return (
        <div>
            <h1>Ring {ringNumber}</h1>
            <h3>Currently Going:</h3>
            <NamesandScores data={sortedData}/>
            <h3>Finished Events:</h3>
            {doneElement}
        </div>
    )
}

export default FinishedEventsColumn