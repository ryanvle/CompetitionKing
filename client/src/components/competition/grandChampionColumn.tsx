import {useEffect, useState} from 'react'
import { dataSet } from './testDatasetForGrandChampion';
import NamesandScores from './namesAndScores';
import { competitor } from './currentlyGoingStaff';


interface Props{
    style: "Wushu"| "Traditional"| "Taichi & Others";
}

//a type to deal with atheletes contending for grand champion
export type athlete = {
    name:string,
    scores: number[],
    averageScore: number,
    age: "Child" | "Kid" | "Teen" | "Adult",
    gender: "Female"| "Male"
}

type ageType = "Child" | "Kid" | "Teen" | "Adult";


const GrandChampionColumn = (props:Props) => {
    const style = props.style


    //fetch stuff
    const [athleteList, setAthleteList] = useState<athlete[]>([]);

    //not fetched stuff
    const [filterIsOnMale, setFilterIsOnMale] = useState<boolean>(false);
    const [maleAgesSelected, setMaleAgesSelected] = useState<Map<ageType, boolean>>(new Map([
        ["Child", false],
        ["Kid", false],
        ["Teen", false],
        ["Adult", false],
    ]));
    const [filterIsOnFemale, setFilterIsOnFemale] = useState<boolean>(false);
    const [femaleAgesSelected, setFemaleAgesSelected] = useState<Map<ageType, boolean>>(new Map([
        ["Child", false],
        ["Kid", false],
        ["Teen", false],
        ["Adult", false],
    ]));

    useEffect(()=>{
        setAthleteList(dataSet);
    },[])


    const handleMaleAgeToggle = (selectedAge:ageType):void =>{
        const tempMap:Map<ageType, boolean> = new Map(maleAgesSelected);
        tempMap.set(selectedAge, !tempMap.get(selectedAge)); //sry kevin
        setMaleAgesSelected(tempMap);

        let oneIsSelected:boolean = false;
        for (let [_, v] of tempMap) {
            console.log("oaifj "+ v)
            if (v === true) {
                oneIsSelected = true;
                break;
            }
        }
        setFilterIsOnMale(oneIsSelected)
    }

    const maleButtonsElements:JSX.Element[] = Array.from(maleAgesSelected, ([key, value]) =>
        value?
        <button key= {key} onClick={()=>{handleMaleAgeToggle(key)}}> {key}</button>:
        <button
            key= {key}
            onClick={()=>{handleMaleAgeToggle(key)}}
            style={{backgroundColor:"#999999"}}> {key}
        </button> //insert css so that selected and unselected look different
    );

    const handleFemaleAgeToggle = (selectedAge:ageType):void =>{
        const tempMap:Map<ageType, boolean> = new Map(femaleAgesSelected);
        tempMap.set(selectedAge, !tempMap.get(selectedAge)); //sry Kevin
        setFemaleAgesSelected(tempMap);

        let oneIsSelected:boolean = false;
        for (let [_, v] of tempMap) {
            console.log("oaifj "+ v)
            if (v === true) {
                oneIsSelected = true;
                break;
            }
        }
        setFilterIsOnFemale(oneIsSelected)
    }

    const femaleButtonsElements:JSX.Element[] = Array.from(femaleAgesSelected, ([key, value]) =>
        value?
        <button key= {key} onClick={()=>{handleFemaleAgeToggle(key)}}> {key}</button>:
        <button
            key= {key}
            onClick={()=>{handleFemaleAgeToggle(key)}}
            style={{backgroundColor:"#999999"}}> {key}
        </button> //insert css so that selected and unselected look different
    );


    const listOfAthletesToCompetitor: competitor[] = []
    if (filterIsOnMale || filterIsOnFemale){
        for(let i = 0; i < athleteList.length; i++){
            const currAthlete:athlete = athleteList[i];
            const currGender: "Male"|"Female" = currAthlete.gender;
            if(
                currGender=== "Male" && maleAgesSelected.get(currAthlete.age) ||
                currGender=== "Female" && femaleAgesSelected.get(currAthlete.age)
            ){
                listOfAthletesToCompetitor.push({
                    name:currAthlete.name,
                    scores: currAthlete.scores,
                    finalScore:currAthlete.averageScore
                });

            }
        }

    }else{
        for(let i = 0; i < athleteList.length; i++){
            const currAthlete:athlete = athleteList[i];
            listOfAthletesToCompetitor.push({
                name:currAthlete.name,
                scores: currAthlete.scores,
                finalScore:currAthlete.averageScore
            });
        }

    }


    return (
        <div key={style} style={{margin:"20px"}}>
        {/* TODO: get rid of style once css exists */}
            <h2>{style}</h2>
            <h4>Male</h4>
            {maleButtonsElements}
            <h4>Female</h4>
            {femaleButtonsElements}
            <h3>Rankings</h3>
            <div className='scroll'>
                <NamesandScores data={listOfAthletesToCompetitor}/>

            </div>
        </div>
    )
}

export default GrandChampionColumn