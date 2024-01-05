import { keyframes, styled } from '@mui/material'
import * as Toast from '@radix-ui/react-toast'

const ToastContainer = styled(Toast.Root)(({ theme }) => ({
  width: '300px',
  height: '60px',
  borderRadius: '8px',
  backgroundColor: theme.palette.background.default,
  position: 'fixed',
  top: '10px',
  right: '50px',
  overflow: 'hidden',
  padding: theme.spacing(2),
  animation: `${slideIn} 0.1s ease-in`,
}))

const ToastTitle = styled(Toast.Title)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.primary.main
}))

const ToastDescription = styled(Toast.Description)(() => ({
  fontSize: '0.725rem'
}))

const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' }
})

type propsType = {
  title: string
  description: string
}

export default (props: propsType) => (
  <Toast.Provider>
    <ToastContainer duration={2000}>
      <ToastTitle>{props.title}</ToastTitle>
      <ToastDescription>{props.description}</ToastDescription>
    </ToastContainer>
    <Toast.Viewport />
  </Toast.Provider>
)
