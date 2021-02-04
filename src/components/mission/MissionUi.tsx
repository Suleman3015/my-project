import React from 'react'
import { LaunchesInfoQuery, LaunchRange } from './../../generated/graphql'
import styles from './styles.module.css'
interface Props extends OwnProps {
    data: LaunchesInfoQuery
}
export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {
    return (
        <div className={styles.sidebar}>
            <h2> 🚀 <span>Launches</span></h2>



            <ol>
                {data.launches?.map((launchObj, ind) => {
                    return <li className={styles.box} key={ind} onClick={() => handleIdChange(launchObj?.flight_number!)}>
                        {launchObj?.mission_name}({launchObj?.launch_year})

                    </li>

                })}
            </ol>


        </div>



    )

}
export default MissionList