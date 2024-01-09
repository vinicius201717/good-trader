// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import PlanDetails from 'src/@core/components/plan-details'

interface Props {
  plan: string
}

const PricingPlans = (props: Props) => {
  // ** Props
  const { plan } = props

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <PlanDetails plan={plan} />
      </Grid>
    </Grid>
  )
}

export default PricingPlans
