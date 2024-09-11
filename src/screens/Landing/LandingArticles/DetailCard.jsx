import { Button, CardContent, CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Navigate, useNavigate } from "react-router-dom";
import moment from "moment";
// import { useGetTopNews } from "../../../core/services/api/News";
const DetailCard = ({data}) => {
  // const { data, isPending } = useGetTopNews();
  // console.log("dataaaa", data);
  const Navigate=useNavigate()
  return (


  
    <Stack
   

      direction={"rtl"}
      justifyContent="center"
      alignItems="end"
      flexDirection={{ lg: "row", md: "row", sm: "row", xs: "inherit" }}
      // marginLeft={"auto"}
      spacing={0.1}
      flexWrap={{lg:"nowrap",md:"wrap",sm:"nowrap", xs:"wrap"}}
      // height={"261px"}
      width={{ lg: "800px", md: "500px", sm: "500px", xs: "140px" }}

      // border={"1px solid #ccc"}
    >
  
      
      <CardMedia
      //  cursor='pointer'
         onClick={() => Navigate("/articles")}
        component="img"
        // flexDirection={"column"}
          // image="src/assets/image/photo.png"
        cursor="pointer"
        // image={data?.currentImageAddressTumb}
        image={
          data?.currentImageAddressTumb?.length > 25
            ? data?.currentImageAddressTumb
            : "src/assets/image/Rectangle 124(1).png"
        }
        alt="green iguana"
        sx={{
          cursor:"pointer",
          borderRadius: "24px",
          width: { lg: "267px", md: "190px", sm: "220px", xs: "300px" },
          // height: {lg:"270px",md:"250px",sm:"130px",xs:"170px"},
          height:{lg:"250px",md:"200px"}
        }}
      />
      <CardContent
        sx={{
          direction: "row",
          textAlign: { lg: "right", md: "right", sm: "right", xs: "center" },
height:{lg:"200px",md:"150px",sm:"150px",xs:"150px"},
          padding: "9px",

          marginLeft: "350px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={{ lg: "right", md: "right", sm: "right", xs: "center" }}
          fontSize={{ lg: "15px", md: "15px", sm: "16px", xs: "9px" }}
          margin={"auto"}
        >
          {/* چگونه مطالعه موثر را برای شما آسانتر کنیم */}
        {data?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: { lg: "250px", md: "250px", sm: "250px", xs: "150px" },
            fontSize: { lg: "15px", md: "10px", sm: "12px", xs: "8px" },
           
          }}
        >
          {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد. */}
          {data?.miniDescribe}
        </Typography>
        
        <Button 
       
        sx={{    fontSize:{xs:"12px"},
           flexDirection: "row-reverse"}}>
              بازدید{data?.currentView} 
              <VisibilityIcon
                sx={{
                  direction: "rtl",
                  width: "14px",
                  height: "14px",
                }}
              />
            </Button>

            <Button sx={{fontSize:{xs:"12px"}, flexDirection: "row-reverse", marginLeft: "10px" }}
                    // text={moment(data?.updateDate).format("yyy/MM/DD")}
            >
              {moment(data?.updateDate).format("yyy/MM/DD")}.
    
              <EventNoteIcon
                sx={{
                  direction: "rtl",
                  width: "14px",
                  height: "14px",
                }}
              />
            </Button>
      </CardContent>
      
    </Stack>
              

  );
};

export default DetailCard;
