import { ChangeEvent, MouseEventHandler, useState } from "react";
type style= {
    styleName: string;
    eventList: string[];
}

function CompetitorSignUp(){
    

    const [ageGroups, setAgeGroups] = useState<string[]>(["kids","teens","adults"]);
    const [skills, setSkills] = useState<string[]>(["Beginner","Intermediate","Advanced"]);
    const [allEvents, setAllEvents] = useState<style[]>([
        {styleName:"wushu", eventList: ["5 stance","long fist","dao shu", "jian shu"]},
        {styleName:"traditional", eventList: ["hand form","short weapon","long weapon"]},
        {styleName:"wushu", eventList: ["empty hand","jian","other"]}
    ]);
    
    
    const [nameInput, setNameInput] = useState<string>("");  
    const [emailInput, setEmailInput] = useState<string>("");  
    const [ageGroupInput, setAgeGroupInput] = useState<string>("unselected");  
    const [skillInput, setSkillInput] = useState<string>("unselected");  


    const handleNameInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setNameInput(evt.target.value);
    }
    const handleEmailInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setEmailInput(evt.target.value);
    }
    const handleAgeGroupInput = (evt: ChangeEvent<HTMLSelectElement>):void => {
        setAgeGroupInput(evt.target.value);
    }
    const handleSkillInput = (evt: ChangeEvent<HTMLSelectElement>):void => {
        setSkillInput(evt.target.value);
    }
 
    const handleStyleWushu =(evt: React.MouseEvent<HTMLButtonElement>):void=>{
        // console.log(evt.target.value);
    }



    const handleNext = ():void => {
        if(
            ageGroupInput === "unselected" ||
            skillInput === "unselected"
        
        ){
            alert("cum")
        }
    }


    
    const ageGroupsElements: JSX.Element[]= ageGroups.map(group => <option value={group}>{group}</option>)
    const skillsElements: JSX.Element[]= skills.map(skill => <option value={skill}>{skill}</option>)
    return(
        <div>
            <h1>CompetitorSignUp</h1>
            
            <label>Name: </label>
            <input type="text" onChange={handleNameInput}/>
            <br/>
            <br/>

            <label>Email: </label>
            <input type="text" onChange={handleEmailInput}/>
            <br/>
            <br/>

            <select name="ageGroup" id="ageGroup" onChange={handleAgeGroupInput}>
                <option value="unselected"></option>
                {ageGroupsElements}
            </select>

            <select name="skill" id="skill" onChange={handleSkillInput}>
                <option value="unselected"></option>
                {skillsElements}
            </select>
            <br/>
            <br/>
            
            <button onClick={handleStyleWushu} value={"Wushu"}>Wushu</button>
            <button onClick={handleNext}>Traditional</button>
            <button onClick={handleNext}>Taichi</button>


            <br/>
            <br/>
            <button onClick={handleNext}>Next</button>
        </div>
    );

}

export default CompetitorSignUp