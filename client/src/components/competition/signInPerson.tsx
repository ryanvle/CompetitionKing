import { useState } from "react";


interface Props{
}


function SignInPerson(props:Props){

    

    
    const [competitorName, setCompetitorName] = useState<string>("Oey"); 
    const [gender, setGender] = useState<string>("male"); 
    const [skill, setSkill] = useState<string>("Advanced"); 
    const [ageGroup, setAgeGroup] = useState<string>("adult"); 
    const [style, setStyle] = useState<string>("wushu"); 
    const [events, setEvents] = useState<string[]>(["changquan","jianshu","qiangshu"]); 
    const [lunchService, setLunchService] = useState<boolean>(true); 
    const [grandChampionElligible, setGrandChampionElligible] = useState<boolean>(true); 
    const [waiver, setWaiver] = useState<boolean>(true); 

    
      



    const listOfEventsElement = events.map(item => <li key={item}>{item}</li>)
    return(
        <div>
            <h1>{competitorName}</h1>
            <ul>
                <li>{gender}</li>
                <li>{skill}</li>
                <li>{ageGroup}</li>
                <li>{style}</li>
            </ul>

            <input type="checkbox" checked={grandChampionElligible} />
            <label>Lunch Service</label><br/>
            <input type="checkbox" checked={grandChampionElligible}/>
            <label>grand champion elligible</label><br/>
            <input type="checkbox" checked={grandChampionElligible}/>
            <label>Waiver</label>

            <br/>
            <ul>
                {listOfEventsElement}
            </ul>

            <button>Check In</button>
        </div>
    );

}

export default SignInPerson
