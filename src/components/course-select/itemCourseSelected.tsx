import { styled, useTheme } from '@mui/system'

const ItemVideoContainer = styled('ul')(({theme}) => ({
  width: '100%',
  height: '40px',
  display: 'flex',
  padding: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: '0.3s',

  '&:hover': {
    color: theme.palette.primary.main 
  }

}))

const ItemVideoIconTitle = styled('div')({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '2px'
})

export function ItemVideo() {
  const theme = useTheme()

  return (
    <ItemVideoContainer>
      <ItemVideoIconTitle>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill={theme.palette.primary.main}
          viewBox='0 0 300 300'
        >
          <path d='M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm-3.56-110.66-48-32A8,8,0,0,0,104,88v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,137.05V103l25.58,17Z'></path>
        </svg>
        <p>Suporte e resistência</p>
      </ItemVideoIconTitle>
      <span>13:00</span>
    </ItemVideoContainer>
  )
}
