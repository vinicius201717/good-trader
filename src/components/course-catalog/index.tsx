import { styled } from '@mui/system'
import CourseItem from './courseIcons'
import { ContinueCourse } from './continueCourse'

const CourseContainer = styled('div')({
  padding: '1rem',
  marginRight: '1rem'
})

const CourseItemsContainer = styled('div')({
  display: 'flex'
})

export default function Courses() {
  return (
    <CourseContainer>
      <h1>Courses</h1>
      <CourseItemsContainer>
        <CourseItem
          title='Set and Forget'
          icon={'SF'}
          gradient={0}
          link={'/set-and-forget/12j312b210fas89f8asd8fs8ddsf'}
        />
        <CourseItem title='Smart Money' icon='SM' gradient={1} link={'/smart-money/12j312b210fas89f8asd8fs8ddsf'} />
      </CourseItemsContainer>
      <h2>Continuar de onde parou?</h2>
      <ContinueCourse />
    </CourseContainer>
  )
}
