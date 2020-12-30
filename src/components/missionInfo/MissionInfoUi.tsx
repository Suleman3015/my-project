import React from 'react'
import {LaunchProfileQuery} from './../../generated/graphql'

interface Props{
    data: LaunchProfileQuery
}

const MissionInfo:React.FC<Props> =({data})=>{
    console.log(data)
    return(
        <div>

    </div>


    )

}
export default MissionInfo