
import { Link } from "react-router-dom";
function Home(){
    return(
        <>

        <section className="sect hero">
                <button className="heroButt">Create an Event</button>
                <button className="heroButt">Register for an Event</button>
        </section>
        
        <section className="sect welcome">
            <div className="sect-container">
                <h1>Welcome</h1>
                <ul className="welcome-nav">
                    <li><a href="#getting_started"><strong>Getting Started</strong></a></li>
                    <li><a href="#events">Events</a></li> 
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
                <p>Welcome to Competition Kings, the ultimate destination for all your competition needs. As a leading competition maker, we offer a diverse array of unique and captivating competitions that cater to a wide range of interests and passions. Our commitment to excellence ensures flawless experiences, with meticulous attention to detail in rules, visuals, and user-friendly interfaces. Collaborating with renowned sponsors, we provide amazing prizes and incentives to motivate participants. With accessible features and dedicated support, unleash your competitive spirit and be part of the most exhilarating competitions at Competition Kings.</p>
            </div>         
        </section>

        <section className="sect events" id="events">
            <h2>Event Name</h2>
            <div className="paragraph container">
                <p>Information on event name</p>
                <button><Link to={"/competition/eventInfo"}>Event Info </Link></button>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Image of event</figcaption>
                </figure>
            </div>
        </section>

        <section className="sect getting_started" id="getting_started">
            <h2>Getting Started</h2>
            <div className="paragraph container">
                <p>Step One</p>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Image of step one</figcaption>
                </figure>
                <p>Step Two</p>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Image of step one</figcaption>
                </figure>
                <p>Step Three</p>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Image of step one</figcaption>
                </figure>
            </div>
        </section>

        <section className="sect pricing" id="pricing">
            <h2>Pricing Plans</h2>
            <div className="sect-image">
            <figure>
                    <img src="" alt="" />
                    <figcaption>$$$</figcaption>
            </figure>
            <figure>
                    <img src="" alt="" />
                    <figcaption>$$$</figcaption>
            </figure>
            <figure>
                    <img src="" alt="" />
                    <figcaption>$$$</figcaption>
            </figure>
            </div>
        </section>

        <footer>@Copyright 2023 Compeition Kings. All rights reserved</footer>

        </>
    );

}

export default Home;
