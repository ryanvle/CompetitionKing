import TvColumn from "../../components/competition/tvColumn";


function Tv(){
    

    //get rid of this later
    const rowStyle = {
        display : "flex",
        width: "100%"
    }

    
    return(
        <>
            <h1>Scores and Schedule</h1>

            <div style={rowStyle}>
                <TvColumn ringNumber={1}/>
                <TvColumn ringNumber={2}/>
                <TvColumn ringNumber={3}/>
            </div>

        </>
    );

}

export default Tv
