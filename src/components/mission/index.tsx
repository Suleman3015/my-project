import React from 'react'
import {useLaunchesInfoQuery} from './../../generated/graphql'
import MissionList from './MissionUi'
import {OwnProps} from './MissionUi'

export const MissionContainer = (props:OwnProps)=>{
    const {data,error,loading} = useLaunchesInfoQuery();
    if(loading)
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    if(error || !data)
        return <h2>error</h2>    
   

    return(
        <MissionList data={data} {...props}  />
    )
}