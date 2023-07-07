import React, { useState } from 'react'
import ManageRingsColumn from '../../components/competition/manageRingsColumn'

const ManageRings = () => {
    const [ringCount, setRingCount] = useState<number>(3)
    const [ringShown, setRingShown] = useState<number>(1)


    const handleSwitchRing =(evt: React.MouseEvent<HTMLButtonElement>):void =>{
        if(!("value" in evt.target) || typeof evt.target.value != "string"){
            throw Error();
        }
        setRingShown(Number.parseInt(evt.target.value));
    }

    
    const switchRingElements: JSX.Element[] = []
    for (let i = 1; i <= ringCount; i++){
        switchRingElements.push(
            <button onClick={handleSwitchRing} value={i} key={i}>Ring {i}</button>
        )
    }
    

    return (
        <div >
            {switchRingElements}
            <ManageRingsColumn ringNumber={ringShown}/>


        </div>
    )
}

export default ManageRings