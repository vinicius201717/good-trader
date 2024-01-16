import { styled } from '@mui/system'
import CourseItem from './courseIcons'
import { useTheme } from '@mui/material'

const ContinueCourseBox = styled('div')(({ theme }) => ({
  width: '40rem',
  height: '8rem',
  marginRight: '2rem',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: `0px 0px 1px 0px ${theme.palette.primary.main}`,

  '@media screen and (max-width: 622px)': {
    width: '95%',
    marginRight: 0
  }
}))

const BlockCurse = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const TextsContainer = styled('div')({
  gap: '1px'
})

export function ContinueCourse() {

  const theme = useTheme()
  
return (
    <ContinueCourseBox>
      <BlockCurse>
        <CourseItem gradient={0} icon='SF' />
        <TextsContainer>
          <h3 style={{ height: '10px' }}>Formação</h3>
          <p>Set and Forget</p>
        </TextsContainer>
      </BlockCurse>
      <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={theme.palette.primary.main} viewBox='0 0 256 256'>
        <path d='M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm-3.56-110.66-48-32A8,8,0,0,0,104,88v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,137.05V103l25.58,17Z'></path>
      </svg>
    </ContinueCourseBox>
  )
}
