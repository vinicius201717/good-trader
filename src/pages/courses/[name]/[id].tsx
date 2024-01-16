import { styled } from '@mui/system'
import { ItemVideo } from 'src/components/course-select/itemCourseSelected'

// import { useRouter } from 'next/router'

const CourseVideoContainer = styled('section')({
  width: 'calc(100vw - 320px)',
  height: '40rem',
  display: 'flex',
  gap: '5px',

  '@media (max-width: 1476px)': {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    padding: '1rem'
  }
})

const CourseOptionVlasses = styled('div')({
  width: '59rem',
  height: '40rem',
  borderRadius: '8px',
  backgroundColor: 'white',

  '@media (max-width: 1476px)': {
    width: '100%',
  },
  '@media (max-width: 464px)': {
    height: '15rem'
  }
})

const CoursesLesson = styled('div')(({ theme }) => ({
  flex: '1',
  padding: '1rem',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.primary.main}`,

  '@media (max-width: 1476px)': {
    width: '100%'
  }
}))

export default function CoursePage() {
  //   const router = useRouter()
  //   const { name, id } = router.query

  return (
    <CourseVideoContainer>
      <CourseOptionVlasses />
      <CoursesLesson>
        <h1 style={{marginLeft: '1rem'}}>Conteúdo:</h1>
        <ItemVideo />
        <ItemVideo />
      </CoursesLesson>
    </CourseVideoContainer>
  )
}
