import { Grid } from '@mui/material'
import UserProfileHeader from './UserProfileHeader'
import ProfileTab from './profile'

const UserProfile = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserProfileHeader />
      </Grid>
      <ProfileTab />
    </Grid>
  )
}

export default UserProfile
