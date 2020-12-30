import React from 'react'
import {useLaunchProfileQuery} from './../../generated/graphql'
import MissionInfo from './MissionInfoUi'
const MissionInfoContainer = ()=>{
    const { data, loading, error } = useLaunchProfileQuery({
           variables: {
              id: '25' // value for 'id'
           },
         });
         if(loading)
         return <h2>loading</h2>
         if(error || !data)
         return <h2>error</h2>      
    return(
            <MissionInfo data={data}/>

    )
}

export default MissionInfoContainer