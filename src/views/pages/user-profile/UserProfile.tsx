import { Grid } from '@mui/material'
import UserProfileHeader from './UserProfileHeader'
import ProfileTab from './profile'
import { UserDataType } from 'src/context/types'

interface UserProfileProps {
  userData: UserDataType
}
const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserProfileHeader userData={userData} />
      </Grid>
      <ProfileTab userData={userData} />
    </Grid>
  )
}

export default UserProfile
