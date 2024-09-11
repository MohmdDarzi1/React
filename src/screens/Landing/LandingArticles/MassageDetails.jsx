import { Typography } from '@mui/material'
import React from 'react'

const MassageDetails = () => {
  return (
    <Typography 
    variant="h4"
    sx={{
      // borderBottom: "4px solid blue",
      width: {lg:"300px",md:"250px",sm:"150px",xs:"100px"},
      height: "60px",
     
      gap: "8px",
      display: "flex",
      justifyContent: "center",
      fontSize: {lg:"40px",md:"30px",sm:"20px",xs:"15px"},
    }}
  >
    اخبار و مقالات
  </Typography>
  )
}

export default MassageDetails
