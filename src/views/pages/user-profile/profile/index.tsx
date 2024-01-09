// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutOverivew from 'src/views/pages/user-profile/profile/AboutOverivew'
import ProjectsTable from 'src/views/pages/user-profile/profile/ProjectsTable'
import ActivityTimeline from 'src/views/pages/user-profile/profile/ActivityTimeline'
import ConnectionsTeams from 'src/views/pages/user-profile/profile/ConnectionsTeams'

// ** Types
// import { ProfileTabType } from 'src/types/apps/userTypes'

const ProfileTab = () => {

  return (
    <Grid container spacing={6}>
      <Grid item lg={4} md={5} xs={12}>
        <AboutOverivew
          about={[{ property: 'Full Name', value: 'John Doe', icon: 'mdi:account-outline' }]}
          contacts={[{ property: 'Contact', value: '(123) 456-7890', icon: 'mdi:phone-outline' }]}
          teams={[{ property: 'Backend Developer', value: '(126 Members)', icon: 'mdi:github', color: 'primary' }]}
          overview={[{ property: 'Task Compiled', value: '13.5k', icon: 'mdi:check' }]}
        />
      </Grid>
      <Grid item lg={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ActivityTimeline />
          </Grid>
          <ConnectionsTeams
            connections={[
              {
                isFriend: false,
                connections: '45',
                name: 'Cecilia Payne',
                avatar: '/images/avatars/2.png'
              }
            ]}
            teams={'data.teamsTech'}
          />
          <Grid item xs={12}>
            <ProjectsTable />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileTab
