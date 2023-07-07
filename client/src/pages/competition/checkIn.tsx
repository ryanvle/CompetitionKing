import SignInPerson from "../../components/competition/signInPerson";
import { ChangeEvent, useState} from "react";


function CheckIn(){
    const [searchInput, setSearchInput] = useState<string>("");


    const handleSearchInput = (evt: ChangeEvent<HTMLInputElement>):void => {
        setSearchInput(evt.target.value);
    }

    const handleSearchButtonOnClick= ():void => {
        console.log(searchInput);
    }





    return(
        <>
            <h1>Check In</h1>
            <input type="text" onChange={handleSearchInput}></input>
            <button onClick={handleSearchButtonOnClick}>Enter</button>
            <SignInPerson/>

        </>
    );

}

export default CheckIn
