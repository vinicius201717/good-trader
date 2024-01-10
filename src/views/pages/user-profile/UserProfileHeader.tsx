// ** React Imports
// import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { UserDataType } from 'src/context/types'
import Link from 'next/link'

// ** Types
// import { ProfileHeaderType } from 'src/types/apps/userTypes'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

type UserProfileHeaderProps = {
  userData: UserDataType
}

const UserProfileHeader = ({ userData }: UserProfileHeaderProps) => {
  // ** State
  // const [data, setData] = useState<ProfileHeaderType | null>(null)

  const designationIcon = 'mdi:briefcase-outline'

  return (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        image={'/images/banners/banner-2.jpg'}
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <ProfilePicture src={'/images/avatars/6.png'} alt='profile-picture' />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Typography variant='h5' sx={{ mb: 4 }}>
              {userData.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon={designationIcon} />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>Development</Typography>
              </Box>
              <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:map-marker-outline' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>Aparecida de Goiânia</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:calendar-blank' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>19/05/2023</Typography>
              </Box>
            </Box>
          </Box>
          <Link href='/pages/account-settings/account/'>
            <Button variant='contained' startIcon={<Icon icon='mdi:cog' fontSize={20} />}>
              Settings
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfileHeader
