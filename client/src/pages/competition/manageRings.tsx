import React, { useState } from 'react'
import ManageRingsJudgeColumn from '../../components/competition/manageRingsJudgeColumn'
import ManageRingsStaffColumn from '../../components/competition/manageRingsStaffColumn'

const ManageRings = () => {
    const [ringCount, setRingCount] = useState<number>(3)




    return (
        <div>
            <div>
                <h1>Manage Judges</h1>
                <p>Click box to go to individual judges score cards</p>
                <ManageRingsJudgeColumn ringNumber={1}/>
                <ManageRingsJudgeColumn ringNumber={2}/>
                <ManageRingsJudgeColumn ringNumber={3}/>
            </div>
            <div>
                <h1>Manage Staff</h1>
                <ManageRingsStaffColumn ringNumber={1}/>
                <ManageRingsStaffColumn ringNumber={2}/>
                <ManageRingsStaffColumn ringNumber={3}/>
            </div>

        </div>
    )
}

export default ManageRings