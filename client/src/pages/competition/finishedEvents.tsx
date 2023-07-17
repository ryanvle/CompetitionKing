import FinishedEventsColumn from "../../components/competition/finishedEventsColumn"


const FinishedEvents = () => {
    


    return (
        <div>
            <h1>Finished Event Results</h1>
            <div style={{display:"flex"}}>
                <FinishedEventsColumn ringNumber={1} />
                <FinishedEventsColumn ringNumber={2} />
                <FinishedEventsColumn ringNumber={3} />
            </div>
        </div>
    )
}

export default FinishedEvents