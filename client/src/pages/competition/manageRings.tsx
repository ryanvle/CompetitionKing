import { useState, useEffect } from 'react'
import ManageRingsJudgeColumn from '../../components/competition/manageRingsJudgeColumn'
import ManageRingsStaffColumn from '../../components/competition/manageRingsStaffColumn'

const ManageRings = () => {

    // const [ringCount, setRingCount] = useState<number>(3)

    const [staff, setStaff] = useState<string[][]>([[],[],[]]);
    const [judges, setJudges] = useState<string[][]>([[],[],[]]);


    useEffect(()=>{
        setJudges([
            ["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"],
            ["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"],
            ["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]
        ]);
        setStaff([
            ["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"],
            ["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"],
            ["Oey Chang", "Nicholas Sun", "Ryan Tang", "Bobby Riley"]
        ]);
    },[])


    return (
        <div>
            <div>
                <h1>Manage Judges</h1>
                <p>Click box to go to individual judges score cards</p>
                <ManageRingsJudgeColumn ringNumber={1} judgesList={judges[0]}/>
                <ManageRingsJudgeColumn ringNumber={2} judgesList={judges[1]}/>
                <ManageRingsJudgeColumn ringNumber={3} judgesList={judges[2]}/>
            </div>
            <div>
                <h1>Manage Staff</h1>
                <ManageRingsStaffColumn ringNumber={1} staffList={staff[0]}/>
                <ManageRingsStaffColumn ringNumber={2} staffList={staff[1]}/>
                <ManageRingsStaffColumn ringNumber={3} staffList={staff[2]}/>
            </div>

        </div>
    )
}

export default ManageRings