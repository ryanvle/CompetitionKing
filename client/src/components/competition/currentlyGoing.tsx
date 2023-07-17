import { ChangeEvent, useState } from "react";

interface Props{
    ringNumber:number;
}


function CurrentlyGoing(props:Props){


    const ringNumber =props.ringNumber;

    const [category, setCategory] = useState<string>("male advanced teen nanquan");
    const [currentCommpetitors, setCurrentCompetitors] = useState<string[]>(["Oey","Boey","Joey","Stoey"]);
    const [competitorScores, setCompetitorScores] = useState<number[]>([9.5]);
    const [currentCompetitorIndex, setCurrentCompetitorIndex]= useState<number>(3);

    const [toggleEdit, setToggleEdit] = useState<boolean>(false);
    const [addPersonInputText, setAddPersonInputText] = useState<string>("");

    //handle functions
    const handleToggleEdit = ():void =>{
        setToggleEdit(!toggleEdit)
    }

    const handleDeletePerson = (evt:React.MouseEvent<HTMLButtonElement>):void =>{
        //deletethis
        if(! ("value" in evt.target)){
            throw Error("I'm an error");
        }
        console.log("endpoint removes " + evt.target.value)
    }

    const handleAddPersonInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setAddPersonInputText(evt.target.value);
    }

    const handleAddPersonButton= ():void => {
        console.log(addPersonInputText)
    }

    
    let currentCommpetitorsElement:JSX.Element[]=[];
    if(toggleEdit){
        for (let i =0; i < currentCommpetitors.length; i++){
            const item = currentCommpetitors[i];
            let score:JSX.Element;
            if( i < competitorScores.length){
                score= <span>{competitorScores[i]}</span>;
            }else{
                score = <></>;
            }
            currentCommpetitorsElement.push(
                <p key={item}>
                    {item}  {score}
                    <button value={item} onClick={handleDeletePerson}>-</button></p>
            )
            
        }
    }else{
        for (let i =0; i < currentCommpetitors.length; i++){
            const item = currentCommpetitors[i];
            let score:JSX.Element;
            if( i < competitorScores.length){
                score= <span>{competitorScores[i]}</span>;
            }else{
                score = <></>;
            }
            currentCommpetitorsElement.push(
                <p key={item}>
                    {item}  {score}
                </p>
            )
            
        }
    }
    
    
    // = toggleEdit?
    //     currentCommpetitors.map(item => <p key={item}>
    //         {item}  
    //         <button value={item} onClick={handleDeletePerson}>-</button></p>):
    //     currentCommpetitors.map(item => <p key={item}>{item}</p>)

    const addCompetitorElement: JSX.Element = toggleEdit?
        <div>
            <input type="text" onChange={handleAddPersonInput}></input>
            <button onClick={handleAddPersonButton}>+</button>
        </div>:
        <></>

    return(
        <div >
            <h2> Currently going</h2>
            <h3>
                {category} 
                &emsp; 
                {currentCompetitorIndex}/{currentCommpetitors.length} 
                &emsp;
                <button onClick={handleToggleEdit}>/</button>                
            </h3>
            <h4></h4>
            {currentCommpetitorsElement}
            {addCompetitorElement}
        </div>

    );

}

export default CurrentlyGoing
