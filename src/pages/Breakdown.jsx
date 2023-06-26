import { Box } from '@mui/material'
import BreakdownChart from 'components/BreakdownChart'
import Header from 'components/Header'
import React from 'react'

const Breakdown = () => {
  return (
    <Box>
      <Header title="BREAKDOWN CHART" subtitle="See Your Sales By Category" />

      <Box mt="40px" height="75px">
        <BreakdownChart />
      </Box>
    </Box>
  )
}

export default Breakdown;