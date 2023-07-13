import { useState} from 'react'


interface Props{
    ringNumber: number;
}

const ManageRingsJudgeColumn = (props:Props) => {


    const [headJudge, setHeadJudge] = useState<string>("Brian Wang");
    const [judges, setJudges] = useState<string[]>(["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]);
    const ringNumber =props.ringNumber;

    const [toggleEditJudges, setToggleEditJudges] = useState<boolean>(false);


    const handleDeletePerson = (evt:React.MouseEvent<HTMLButtonElement>):void =>{
        if(! ("value" in evt.target)){
            throw Error("I'm an error");
        }
        console.log("endpoint removes " + evt.target.value)
    }

    const handleToggleEditJudge = ():void =>{
        setToggleEditJudges(!toggleEditJudges)
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
                    Judge {i+1}:  &emsp;  {item}
                </p>
            )

        }
    }


    return (
    <div style={{display: "inline-block", margin: "20px"}}>
        <h2>Ring {ringNumber}</h2>
        <div>
            <p>Head Judge: &emsp;&emsp; {headJudge}</p>
            {judgesElement}
            <button onClick={handleToggleEditJudge}>Edit Judge List</button>
        </div>


    </div>
)
}

export default ManageRingsJudgeColumn