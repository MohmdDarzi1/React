import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import ServiceCard from "../../../components/common/ServiceCard";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

export default function ActionAreaCard() {
  const defaultText =
    "سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت";
  return (
    <Stack
      margin={"auto"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      width={"100%"}
      height={{ lg: "496px", md: "350px", sm: "250px", xs: "150px" }}
      // padding={5}
    >
      <Typography
        variant="h4"
        sx={{
          // borderBottom: "4px solid blue",
          // width: "120px",
          height: "15%",
          lineHeight: "23px",
          fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
        }}
      >
        خدمات ما
      </Typography>
      {/* <Box sx={{border:"1px solid red", height:"5px", width:"100px", backgroundColor:""}}></Box> */}

      <Stack
        // border={"1px solid #ccc"}
        gap={"10px"}
        width={"95%"}
        height={"60%"}
        direction={"row-reverse"}
        display={"flex"}
        justifyContent={"space-between"}
        textAlign={"center"}
      >
        <ServiceCard
          boxHeight={"100%"}
          boxWidth={"30%"}
          BottomHeroSectionCenter={"مدرک معتبر"}
          BottomHeroSectionText={defaultText}
          image={
            <ContactMailIcon
              sx={{
                fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
              }}
            />
          }
        />
        <ServiceCard
          boxHeight={"100%"}
          boxWidth={"30%"}
          BottomHeroSectionCenter={"فرصت های شغلی"}
          BottomHeroSectionText={defaultText}
          image={
            <BusinessCenterIcon
              sx={{
                fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
              }}
            />
          }
        />
        <ServiceCard
          boxHeight={"100%"}
          boxWidth={"30%"}
          BottomHeroSectionCenter={"سادگی خدمات"}
          BottomHeroSectionText={defaultText}
          image={
            <MiscellaneousServicesIcon
              sx={{
                fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
              }}
            />
          }
        />
      </Stack>
    </Stack>
  );
}
