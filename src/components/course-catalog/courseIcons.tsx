import { styled } from '@mui/system'
import Link from 'next/link'

const CourseItemContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '10px'
})

const LabelItem = styled('label')({
  fontSize: '0.8rem',
  fontWeight: '900',
  letterSpacing: '-0.02rem'
})

const LinkItem = styled(Link)<{ gradientColor: number }>(({ gradientColor }) => ({
  height: '4rem',
  width: '4rem',
  textDecoration: 'none',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  padding: '12px',

  background: `linear-gradient(120deg, ${gradients[gradientColor]})`,
  color: 'white'
}))

const gradients = ['rgba(60,119,74,1) 0%, rgba(0,255,218,1) 100%', 'rgba(60,63,119,1) 0%, rgba(136,0,255,1) 100%']

export default function CourseItem(props: any) {
  return (
    <CourseItemContainer>
      <LinkItem href='/' gradientColor={props.gradient}>
        <h3>{props.icon}</h3>
      </LinkItem>
      {props.title ? <LabelItem>{props.title}</LabelItem> : null}
    </CourseItemContainer>
  )
}
