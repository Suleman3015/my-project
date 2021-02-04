import React from 'react'
import {useLaunchProfileQuery} from './../../generated/graphql'
import MissionInfo from './MissionInfoUi'

interface OwnProps {
  id: number;
}

const MissionInfoContainer = ({ id }: OwnProps)=>{
    const { data, loading, error } = useLaunchProfileQuery({
           variables: {
              id:String(id) // value for 'id'
           },
         });
         React.useEffect(() => {
        }, [id]);
         if(loading)
         return <div className="spinner-border spin" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
         if(error || !data)
         return <h2>error</h2>      
    return(
            <MissionInfo data={data}/>

    )
}

export default MissionInfoContainer