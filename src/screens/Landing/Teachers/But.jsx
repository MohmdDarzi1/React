import { Button } from '@mui/material'
import React from 'react'
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
const But = ({newsCount}) => {
  return (
    <Button
      sx={{
      
        direction: "rtl",
        // color:"#fff",
        borderRadius: "100px",
        width: "88px",
        height: "35px",
        fontSize: "10px",
        position: "relative",
        top: "75px",
        right: "44px",
        backgroundColor: "#fff",
        color: "#2196F3",
    marginTop:"50px",
      }}
      variant="contained"
      disableElevation
    >
      <WorkspacePremiumOutlinedIcon
        sx={{ backgroundSize: "7px", width: "16px", height: "16px" }}
      />
     {newsCount}
        دوره 
    </Button>
  )
}

export default But