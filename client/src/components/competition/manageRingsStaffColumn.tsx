import { useState} from 'react'


interface Props{
    ringNumber: number;
}

const ManageRingsStaffColumn = (props:Props) => {


    const [staff, setStaff] = useState<string[]>(["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]);
    const ringNumber =props.ringNumber;

    const [toggleEditStaff, setToggleEditStaff] = useState<boolean>(false);


    const handleDeletePerson = (evt:React.MouseEvent<HTMLButtonElement>):void =>{
        //deletethis
        if(! ("value" in evt.target)){
            throw Error("I'm an error");
        }
        console.log("endpoint removes " + evt.target.value)
    }
    const handleToggleEditStaff = ():void =>{
        setToggleEditStaff(!toggleEditStaff)
    }



    let staffElement:JSX.Element[]=[];
    if(toggleEditStaff){
        for (let i =0; i < staff.length; i++){
            const item = staff[i];


            staffElement.push(
                <p key={item}>
                    Staff {i+1}:  &emsp;  {item}
                    <button value={item} onClick={handleDeletePerson}>-</button></p>
            )

        }
    }else{
        for (let i =0; i < staff.length; i++){
            const item = staff[i];


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