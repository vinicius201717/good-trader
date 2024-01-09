// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
// import { TeamsTabType } from 'src/types/apps/userTypes'
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const dataFake = [
  { title: 'teste', description: 'teste' },
  { title: 'teste1', description: 'teste' },
  { title: 'teste3', description: 'teste3' }
]

const Teams = () => {
  return (
    <Grid container spacing={6}>
      {dataFake &&
        Array.isArray(dataFake) &&
        dataFake.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={'/image/avattars/02.png'} sx={{ mr: 2.5, height: 38, width: 38 }} />
                      <Typography variant='h6'>{item.title}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size='small' sx={{ color: 'text.secondary' }}>
                        <Icon icon='mdi:star-outline' />
                      </IconButton>
                      <OptionsMenu
                        iconButtonProps={{ size: 'small' }}
                        options={[
                          'Rename Team',
                          'View Details',
                          'Add to Favorites',
                          { divider: true },
                          { text: 'Delete Team', menuItemProps: { sx: { color: 'error.main' } } }
                        ]}
                      />
                    </Box>
                  </Box>
                  <Typography sx={{ my: 5, color: 'text.secondary' }}>{item.description}</Typography>
                  <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AvatarGroup className='pull-up' sx={{ zIndex: 1, alignItems: 'center' }}>
                        <Tooltip key={index} title={'Vinicius'}>
                          <Avatar src={'/image/avattars/02.png'} alt={'Vinicius'} sx={{ height: 32, width: 32 }} />
                        </Tooltip>
                      </AvatarGroup>
                      <Avatar sx={{ ml: -1, height: 32, width: 32, fontSize: '1rem' }}>+{1000}</Avatar>
                    </Box>
                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                      {dataFake &&
                        dataFake.map((chip, index) => (
                          <Box
                            href='/'
                            key={index}
                            component={Link}
                            onClick={e => e.preventDefault()}
                            sx={{
                              textDecoration: 'none',
                              '&:not(:last-of-type)': { mr: 3 },
                              '& .MuiChip-root': { cursor: 'pointer' }
                            }}
                          >
                            <CustomChip size='small' skin='light' color={'success'} label={chip.title} />
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Teams
