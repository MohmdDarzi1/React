import { Box, styled } from "@mui/system";
import React from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import GroupsIcon from "@mui/icons-material/Groups";
import ServiceCard from "../../../../components/common/ServiceCard";
import { useGetLanding } from "../../../../core/services/api/Landing";

const BottomHeroSectionBox = () => {
  const { data, isPending } = useGetLanding();
  console.log("dataREp",data)
  return (
    <Box
      display={"flex"}
      gap={{lg:4,md:3,sm:2,xs:1}}
      flexDirection={"row-reverse"}
      justifyContent={"center"}
      height={{lg:"211px",md:"180px",sm:"140px",xs:"80px"}}
      width={{lg:"724px",md:"600px",sm:"450px",xs:"290px"}}

    >
    
      
      <ServiceCard
     
        boxHeight={"100%"}
        boxWidth={"30%"}

        BottomHeroSectionCenter={data?.studentCount}
        BottomHeroSectionText={" دانشجو"}
        image={<GroupsIcon sx={{ fontSize: {lg:"40px",md:"30px",sm:"20px",xs:"15px"} }} />}
      />

      <ServiceCard
        boxHeight={"100%"}
        boxWidth={"30%"}
        BottomHeroSectionCenter={data?.courseCount}
        BottomHeroSectionText={"دروه های آموزشی"}
        image={<WatchLaterIcon sx={{ fontSize: {lg:"40px",md:"30px",sm:"20px",xs:"15px"} }} />}
      />
      <ServiceCard
        boxHeight={"100%"}
        boxWidth={"30%"}
        BottomHeroSectionCenter={data?.teacherCount}
        BottomHeroSectionText={"مدرس مجرب"}
        image={<CastForEducationIcon sx={{ fontSize: {lg:"40px",md:"30px",sm:"20px",xs:"15px"} }} />}
      />
    </Box>
  );
};

export default BottomHeroSectionBox;

