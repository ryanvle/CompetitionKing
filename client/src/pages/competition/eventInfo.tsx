import { useEffect, useState } from "react";


function EventInfo(){

    const [eventName, setEventName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [date, setDate] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [eventRules, setEventRules] = useState<string>();
    const [fees, setFees] = useState<string>();

    useEffect(() => {
        // fetch(url)
        //  .then(resp => resp.json())
        //  .then(data => this.setState()

        const fillerOne:string = "A black hole is a region of spacetime where gravity is so strong that nothing, including light or other electromagnetic waves, has enough energy to escape it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. The boundary of no escape is called the event horizon. Although it has a great effect on the fate and circumstances of an object crossing it, it has no locally detectable features according to general relativity. In many ways, a black hole acts like an ideal black body, as it reflects no light. Moreover, quantum field theory in curved spacetime predicts that event horizons emit Hawking radiation, with the same spectrum as a black body of a temperature inversely proportional to its mass. This temperature is of the order of billionths of a kelvin for stellar black holes, making it essentially impossible to observe directly"

        setEventName("9th Seattle International Martial Arts Championship 2023");
        setAddress("1234 some Street Seattle Wa 20123");
        setDate("July 30, 2023");
        setDescription(fillerOne);
        setEventRules(fillerOne);
        setFees(fillerOne);

        }, [])

    return(
        <div>
            <h1>Event Information</h1>
            <div>
                <h2>{eventName}</h2>
                <p>{address}</p>
                <p>{date}</p>
            </div>

            <div>
                <h2>Description</h2>
                <p>{description }</p>
            </div>

            <div>
                <h2>Event Rules</h2>
                <p>{eventRules}</p>
            </div>

            <div>
                <h2>Event Fees</h2>
                <p>{fees}</p>
            </div>
        </div>
    );

}

export default EventInfo
