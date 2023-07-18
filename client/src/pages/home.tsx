
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
    
        <section className="sect hero">
            <div className="hero nav">
                <button>Create an Event</button>
                <button>Register for an Event</button>
            </div>
        </section>
        
        <section className="sect welcome">
            <article>
                <h1>Welcome</h1>
                <p>Welcome to compeition kings a great compeition maker</p>
                <ul className="welcome-nav">
                    <li><a href="#events">Events</a></li>
                    <li><a href="#getting_started">Getting Started</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
            </article>
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
