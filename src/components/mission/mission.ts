import gql from 'graphql-tag'


export const LaunchesInfo = gql`
query launchesInfo{
    launches {
      mission_name
      mission_id
      launch_year
      launch_success
    }
  }
`   