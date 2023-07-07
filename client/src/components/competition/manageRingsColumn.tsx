import { useState} from 'react'
import CurrentlyGoing from './currentlyGoing';
import FutureEventsList from './futureEventsList';
import DoneList from './doneList';

interface Props{
    ringNumber: number;
}

const ManageRingsColumn = (props:Props) => {

    
    const [headJudge, setHeadJudge] = useState<string>("Brian Wang"); 
    const [judges, setJudges] = useState<string[]>(["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]); 
    const [announcer, setAnnouncer] = useState<string>("Brian Wang"); 
    const [scoreKeeper, setScoreKeeper] = useState<string>("Brian Wang"); 
    const [rollCall, setRollCall] = useState<string>("Brian Wang"); 
    const ringNumber =props.ringNumber; 
    
    const [toggleEditJudges, setToggleEditJudges] = useState<boolean>(false);
    const [toggleEditStaff, setToggleEditStaff] = useState<boolean>(false);


    const handleDeletePerson = (evt:React.MouseEvent<HTMLButtonElement>):void =>{
        //deletethis
        if(! ("value" in evt.target)){
            throw Error("I'm an error");
        }
        console.log("endpoint removes " + evt.target.value)
    }
    const handleToggleEditJudge = ():void =>{
        setToggleEditJudges(!toggleEditJudges)
    }
    const handleToggleEditStaff = ():void =>{
        setToggleEditStaff(!toggleEditStaff)
    }


    let judgesElement:JSX.Element[]=[];
    if(toggleEditJudges){
        for (let i =0; i < judges.length; i++){
            const item = judges[i];

            
            judgesElement.push(
                <p key={item}>
                    Judge {i}:  &emsp;  {item}  
                    <button value={item} onClick={handleDeletePerson}>-</button></p>
            )
            
        }
    }else{
        for (let i =0; i < judges.length; i++){
            const item = judges[i];

            
            judgesElement.push(
                <p key={item}>
                    Judge {i}:  &emsp;  {item} 
                </p>
            )
            
        }
    }


    return (
    <div>
        <h2>Ring {ringNumber}</h2>
        <div>
            <h3>Judges<button onClick={handleToggleEditJudge}>/</button></h3>
            <p>Head Judge: &emsp;&emsp; {headJudge}</p>
            {judgesElement}
        </div>
        <div>
            <h3>Staff<button onClick={handleToggleEditStaff}>/</button></h3>
            <p>Announcer: &emsp; &emsp; {announcer} </p>
            <p>Score/TimeKeeper: &emsp; &emsp;  {scoreKeeper}&emsp;&emsp;</p>
            <p>Roll Call: &emsp; &emsp;  {rollCall}</p>

            <CurrentlyGoing ringNumber={ringNumber}/>
            <FutureEventsList ringNumber={ringNumber}/>
            <DoneList ringNumber={ringNumber}/>
        </div>

    </div>
)
}

export default ManageRingsColumn