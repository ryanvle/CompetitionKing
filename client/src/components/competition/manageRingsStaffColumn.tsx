import { ChangeEvent, useState} from 'react'


interface Props{
    ringNumber: number;
}

const ManageRingsStaffColumn = (props:Props) => {

    //
    const [staff, setStaff] = useState<string[]>(["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]);
    const ringNumber =props.ringNumber;

    const [toggleEditStaff, setToggleEditStaff] = useState<boolean>(false);
    const staffIsBeingRenamedBuilder:boolean[] = new Array<boolean>(staff.length).fill(false);
    const [staffIsBeingRenamed, setStaffIsBeingRenamed] = useState<boolean[]>(staffIsBeingRenamedBuilder);
    const [staffRenamingTextInput, setStaffRenamingTextInput] = useState<string>("");




    const handleToggleEditStaff = ():void =>{
        setToggleEditStaff(!toggleEditStaff)
    }

    const handleToggleRenamePerson = (i:number):void =>{
        const temp: boolean[] = new Array<boolean>(staff.length).fill(false);
        temp[i]= !staffIsBeingRenamed[i];
        setStaffIsBeingRenamed(temp);

    }



    const handleInputOnChange = (evt:ChangeEvent<HTMLInputElement>):void =>{
        setStaffRenamingTextInput(evt.target.value);
    }

    const handleRenameOk = (i:number):void =>{
        //fetch send them the name and input
        console.log("FETCH should change name of staff "+ i+ " to "+ staffRenamingTextInput);
        handleToggleRenamePerson(i);

    }




    let staffElement:JSX.Element[]=[];
    if(toggleEditStaff){
        for (let i =0; i < staff.length; i++){
            const item:string = staff[i];

            if(staffIsBeingRenamed[i]){
                staffElement.push(

                    <p key={i}>
                    Staff {i}:  &emsp;
                        <input type='text' onChange={handleInputOnChange}></input>
                        <button onClick={()=>handleRenameOk(i)}>ok</button>
                        <button onClick={()=>handleToggleRenamePerson(i)}>cancel</button>
                        <br/>
                    </p>

                );
            }else{
                staffElement.push(
                    <p key={i}>
                        Staff {i}:  &emsp;  {item}
                        <button value={i} onClick={()=>{handleToggleRenamePerson(i)}}>-</button>
                    </p>
                )

            }

        }
    }else{
        for (let i =0; i < staff.length; i++){
            const item:string = staff[i];

            staffElement.push(
                <p key={item}>
                    Staff {i}:  &emsp;  {item}
                </p>
            )

        }
    }


    return (
    <div style={{display: "inline-block", margin: "20px"}}>
        <h2>Ring {ringNumber}</h2>
        <div>
            {staffElement}
            <button onClick={handleToggleEditStaff}>Edit Staff List</button>
        </div>


    </div>
)
}

export default ManageRingsStaffColumn

