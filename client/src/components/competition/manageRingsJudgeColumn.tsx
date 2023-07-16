import { ChangeEvent, useState} from 'react'
import { Link } from 'react-router-dom';


interface Props{
    ringNumber: number;
}

const ManageRingsJudgeColumn = (props:Props) => {


    const [judges, setJudges] = useState<string[]>(["Brian Wang","Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]);
    const ringNumber =props.ringNumber;

    const [toggleEditJudges, setToggleEditJudges] = useState<boolean>(false);
    const judgeIsBeingRenamedBuilder:boolean[] = new Array<boolean>(judges.length).fill(false);
    const [judgeIsBeingRenamed, setJudgeIsBeingRenamed] = useState<boolean[]>(judgeIsBeingRenamedBuilder);
    const [judgeRenamingTextInput, setJudgeRenamingTextInput] = useState<string>("");




    const handleToggleEditJudge = ():void =>{
        setToggleEditJudges(!toggleEditJudges)
    }

    const handleToggleRenamePerson = (i:number):void =>{
        const temp: boolean[] = new Array<boolean>(judges.length).fill(false);
        temp[i]= !judgeIsBeingRenamed[i];
        setJudgeIsBeingRenamed(temp);

    }



    const handleInputOnChange = (evt:ChangeEvent<HTMLInputElement>):void =>{
        setJudgeRenamingTextInput(evt.target.value);
    }

    const handleRenameOk = (i:number):void =>{
        //fetch send them the name and input
        console.log("FETCH should change name of judge "+ i+ " to "+ judgeRenamingTextInput);
        handleToggleRenamePerson(i);

    }




    let judgesElement:JSX.Element[]=[];
    if(toggleEditJudges){
        for (let i =0; i < judges.length; i++){
            const judgeLabelText:string = i===0? "Head Judge": ("Judge "+i);
            const item:string = judges[i];

            if(judgeIsBeingRenamed[i]){
                judgesElement.push(

                    <p key={i}>
                    {judgeLabelText}:  &emsp;
                        <input type='text' onChange={handleInputOnChange}></input>
                        <button onClick={()=>handleRenameOk(i)}>ok</button>
                        <button onClick={()=>handleToggleRenamePerson(i)}>cancel</button>
                        <br/>
                    </p>

                );
            }else{
                judgesElement.push(
                    <p key={i}>
                        {judgeLabelText}:  &emsp;  {item}
                        <button value={i} onClick={()=>{handleToggleRenamePerson(i)}}>-</button>
                    </p>
                )

            }

        }
    }else{
        for (let i =0; i < judges.length; i++){
            const item:string = judges[i];
            const judgeLabelText:string = i===0? "Head Judge": ("Judge "+i);
            const judgePageUrl:string = i===0?
                "/competition/headJudge?ringNumber="+ringNumber:
                ("/competition/judge/?ringNumber="+ringNumber+"&judgeNumber="+i )
            judgesElement.push(
                <p key={item}>
                    {judgeLabelText}:  &emsp;  <Link to={judgePageUrl}>{item}</Link>
                </p>
            )

        }
    }


    return (
    <div style={{display: "inline-block", margin: "20px"}}>
        <h2>Ring {ringNumber}</h2>
        <div>
            {/* <p>Head Judge: &emsp;&emsp; {headJudge}</p> */}
            {judgesElement}
            <button onClick={handleToggleEditJudge}>Edit Judge List</button>
        </div>


    </div>
)
}

export default ManageRingsJudgeColumn