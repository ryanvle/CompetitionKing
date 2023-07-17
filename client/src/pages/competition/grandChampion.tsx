import React from 'react'
import GrandChampionColumn from '../../components/competition/grandChampionColumn'

const GrandChampion = () => {
  return (
    <div>
      <h1>Grand Champion Rankings</h1>
      <div style={{display:"flex"}}>
        <GrandChampionColumn style='Wushu'/>
        <GrandChampionColumn style='Traditional'/>
        <GrandChampionColumn style='Taichi & Others'/>

      </div>
    </div>
  )
}

export default GrandChampion