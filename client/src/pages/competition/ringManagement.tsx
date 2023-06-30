import RingManagementColumn from "../../components/competition/ringManagementColumn";

function RingManagement(){

    

    //get rid of this later
    const rowStyle = {
        display : "flex",
        width: "100%"
    }

    
    return(
        <>
            <h1>ringManagement</h1>

            <div style={rowStyle}>
                <RingManagementColumn ringNumber={1}/>
                <RingManagementColumn ringNumber={2}/>
                <RingManagementColumn ringNumber={3}/>
            </div>

        </>
    );

}

export default RingManagement
