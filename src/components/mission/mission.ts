import gql from 'graphql-tag'


export const LaunchesInfo = gql`
query launchesInfo{
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`   