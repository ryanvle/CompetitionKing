import {useEffect, ChangeEvent, useState} from "react";


function CheckIn(){

    //athlete info
    const [competitorName, setCompetitorName] = useState<string>("Oey Chang");
    const [gender, setGender] = useState<string>("Male");
    const [level, setLevel] = useState<string>("Beginner");
    const [age, setAge] = useState<string>("Adult");
    const [events, setEvents] = useState<string>("101, 104, 105");
    const [grandChampionElligible, setGrandChampionElligible] = useState<string>("Yes");


    const [searchInput, setSearchInput] = useState<string>("");
    const [showAthelete, setShowAthlete] = useState<boolean>(false);
    const [checkInButtonIsDisabled, setCheckInButtonIsDisabled] = useState<boolean>(true);


    useEffect(()=>{
        setCompetitorName("Oey Chang");
        setGender("Male");
        setLevel("Advanced");
        setAge("Adult");
        setEvents("101, 104, 105");
        setGrandChampionElligible("Yes");
    },[]);


    const handleSearchInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setSearchInput(evt.target.value);
    }

    const handleSearchButtonOnClick= ():void => {
        console.log("endpoint to seach for "+ searchInput);
        //FETCH find the athlete and get the info
        setShowAthlete(true)
    }

    const handleWaiverConfirmed= ():void => {
        setCheckInButtonIsDisabled(false)
    }

    const handleCheckInAthlete= ():void => {
        //FETCH athlete is checked in, waiver is signed
        alert("endpoint is called")
    }


    const athleteElement:JSX.Element = showAthelete?
        <div>
            <h1>{competitorName}</h1>
            <p>Gender: {gender}</p>
            <p>Level: {level}</p>
            <p>Age: {age}</p>
            <p>Events: {events}</p>
            <p>Grand Champion: {grandChampionElligible}</p>

            <br/>
            <br/>

            <button onClick={handleWaiverConfirmed}>Select to Confirm Signed Waiver</button>
            <br/>
            <br/>
            <button onClick={handleCheckInAthlete} disabled={checkInButtonIsDisabled}>Check in Athlete</button>
        </div>
        :<></>



    return(
        <>
            <h1>Check In</h1>
            <input type="text" onChange={handleSearchInput}></input>
            <button onClick={handleSearchButtonOnClick}>Enter</button>

            {athleteElement}

        </>
    );

}

export default CheckIn
