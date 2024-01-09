// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Types
// import { ProfileTabType } from 'src/types/apps/userTypes'

const ProfileTab = () => {
  return (
    <Grid container spacing={6}>
      <Grid item lg={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <h1>informações de usuarios</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileTab
