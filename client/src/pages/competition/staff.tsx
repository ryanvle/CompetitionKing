import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FutureEventsList from '../../components/competition/futureEventsList';
import CurrentlyGoingStaff, { competitor } from '../../components/competition/currentlyGoingStaff';
import DoneList from '../../components/competition/doneList';
import DoneEvent from '../../components/competition/doneEvent';

export type wushuEvent= {
    eventName:string;
    competitors: competitor[]
}

const Staff = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const ringNumQuery = queryParams.get("ringNumber");
    if(ringNumQuery === null) throw Error;
    const ringNumber:number =  Number.parseInt(ringNumQuery);


    const [futureEventNames, setFutureEventNames] = useState<string[]>([
        "Advanced Adult Female Changquan",
        "Advanced Adult Female DaoShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
        "Advanced Adult Female GunShu",
    ])
    const [futureEventsCompetitors, setFutureEventsCompetitors] = useState<string[][]>([
        ["Qoey","Woey","Roey","Toey",],
        ["Yoey","Poey","Soey","Loey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
        ["Foey","Goey","Hoey","Joey",],
    ])

    const [doneData, setDoneData] = useState<wushuEvent[]>(
    [
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
            eventName: "Five Stance - Beginner Adult Men",
            competitors: [
                {name:"Oey Chang", scores: [8.2,8.5,8.7,8.6,8.9], finalScore: 8.6 },
                {name:"Qoey Chang", scores: [8.4,8.2,8.7,8.2,8.0], finalScore: 8.27 },
                {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
                {name:"Toey Chang", scores: [8.1,8.4,8.7,8.1,8.4], finalScore: 8.3 },
            ]
        },
        {
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },{
            eventName: "Five Stance - Beginner Adult Men",
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
        },

    ])


    let upNextElement:JSX.Element[] = futureEventsCompetitors[0].map(competitor=>
        <p key={"comp"+competitor}>{competitor}</p>)

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


    const curlength:number = futureEventsCompetitors[0].length
    return (
        <div>
            <Link to={"/competition/manageRings"}>Back </Link>
            <h2>Currently Going:</h2>
                <CurrentlyGoingStaff ringNumber={ringNumber}/>

            <h2>Up Next:</h2>
                <h3>{futureEventNames[0]} {curlength}/{curlength} </h3>
                {upNextElement}
            <h2>Remaining Events ({futureEventNames.length})</h2>
                <div className='scroll'>
                    <FutureEventsList
                        futureEventNames={futureEventNames.slice(1)}
                        futureEventsCompetitors= {futureEventsCompetitors.slice(1)}
                    />
                </div>

            <h2>Finished Events</h2>
            <div className='scroll'>

                {doneElement}
            </div>
        </div>
    )
}

export default Staff