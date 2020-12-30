import React from 'react'
import {LaunchesInfoQuery} from './../../generated/graphql'

interface Props{
    data: LaunchesInfoQuery
}

const MissionList:React.FC<Props> =({data})=>{
    return(
        <div>
            <ul>
            {data.launches?.map((launchObj,ind)=>{
                return <li key={ind}>
                    {launchObj?.mission_name}
                </li>
            })}
            </ul>
        </div>

    )

}
export default MissionList