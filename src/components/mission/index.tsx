import React from 'react'
import {useLaunchesInfoQuery} from './../../generated/graphql'
import MissionList from './MissionUi'

export const MissionContainer = ()=>{
    const {data,error,loading} = useLaunchesInfoQuery();
    if(loading)
        return <h2>loading</h2>
    if(error || !data)
        return <h2>error</h2>    
   

    return(
        <MissionList data={data} />
    )
}