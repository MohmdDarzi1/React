// import { Avatar, Typography } from "@mui/material";
// import { Box, Stack } from "@mui/system";
// import React from "react";
// import CourseDataComponent from "./CourseDataComponent";

// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import ButtonComponent from "../../../../components/common/ButtonComponent";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import { useGetReserveAdd } from "../../../../core/services/api/courses";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import FingerprintIcon from '@mui/icons-material/Fingerprint';
// import { useQueryClient } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import moment from "moment";

// const Specifications = ({ data }) => {
//   const { id } = useParams();
//   const getReserveAdd = useGetReserveAdd();
//   const queryClient = useQueryClient();
//   return (
//     <Box
//       sx={{
//         width: "30%",
//         height: { lg: "645px", md: "405px", sm: "270px", xs: "150px" },
//         // border: "1px solid green",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         gap: "4%",
//         padding: "1%",
//       }}
//     >
//       <Box
//         sx={{
//           // border: "1px solid blue",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-around",
//           alignItems: "center",
//           backgroundColor: "secondary.main",
//         }}
//         flex={5}
//       >
//         <Typography
//           variant="h5"
//           component={"h5"}
//           sx={{
//             fontSize: { lg: "24px", md: "20px", sm: "14px", xs: "8px" },
//             fontWeight: "700",
//           }}
//         >
//           مشخصات دوره
//         </Typography>
//         <CourseDataComponent
//           avatarIcon={<HowToRegIcon />}
//           text1={"تعداد دانشجو"}
//           text2={data?.capacity}
//           // {moment(item?.lastUpdate).format("yyyy/MM/DD")}
//         />
//         <CourseDataComponent
//           avatarIcon={<PeopleAltIcon />}
//           text1={"وضعیت دوره"}
//           text2={data?.courseLevelName}
//         />
//         <CourseDataComponent
//           avatarIcon={<FingerprintIcon />}
//           text1={"تاریخ شروع"}
//           text2={moment(data?.startTime).format("yyy/MM/DD")}
//         />
//         <CourseDataComponent
//           avatarIcon={<CalendarMonthIcon />}
//           text1={"تاریخ پایان"}
//           text2={moment(data?.endtime).format("yyy/MM/DD")}
//         />
//         <Stack
//           sx={{
//             width: "100%",
//             height: "20%",
//             flexDirection: { sm: "row", xs: "column" },
//             justifyContent: "space-between",
//             alignItems: "center",
//             alignContent: "center",
//             padding: "5%",
//           }}
//         >
//           <Box
//             width={{ sm: "40%", xs: "90%", height: "100%" }}
//             sx={{ display: "flex", alignItems: "center" }}
//           >
//             {" "}
//             <ButtonComponent
//               fontSize={{ lg: "15px", md: "12px", sm: "7px", xs: "5px" }}
//               width={"100%"}
//               height={{ lg: "70%", xs: "100%" }}
//               text={"شرکت در دوره"}
//               onClick={() => {
//                 getReserveAdd.mutate(id, {
//                   onSuccess: (data) => {
                
//                     console.log("dataaamee", data);
//                     queryClient.invalidateQueries({
//                       queryKey: ["getNewsListId"],
//                     });
//                   },
//                   onError: (res) => {
//                     toast.error("   ثبت نشد.!");
//                   },
//                 });
//               }}
//             />
//           </Box>{" "}
//           <Box
//             width={"40%"}
//             display={"flex"}
//             justifyContent={{ sm: "left", xs: "center" }}
//             gap={"2%"}
//             alignItems={"center"}
//           >
//             <Typography
//               fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "7px" }}
//               color={"primary.main"}
//             >
//               {/* 500,000 */}
//               {data?.cost}
//             </Typography>
//             <Typography
//               fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "7px" }}
//             >
//               تومان
//             </Typography>
//           </Box>
//         </Stack>
//       </Box>
//       <Box
//         sx={{
//           // border: "1px solid blue",
//           backgroundColor: "secondary.main",
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//         }}
//         flex={1}
//       >
//         <Box width={"20%"}>
//           <Avatar
//             sx={{
//               backgroundColor: "primary.main",
//               width: { lg: "70px", md: "50px", sm: "35px", xs: "16px" },
//               height: { lg: "70px", md: "50px", sm: "35px", xs: "16px" },
//             }}
//             // src="src/assets/image/ostad.jpg"
//             // image={data?.tumbImageAddress}
//             src={
//               data?.imageAddress?.length > 15
//                 ? data?.imageAddress
//                 : "src/assets/image/ostad.jpg"
//             }
//           />
//         </Box>
//         <Stack sx={{ flexDirection: "column", width: "70%" }}>
//           <Stack flexDirection={"row"} gap={"3%"} alignItems={"center"}>
//             <VerifiedIcon
//               sx={{
//                 fontSize: { lg: "18px", md: "13px", sm: "11px", xs: "7px" },
//               }}
//             />
//             <Typography
//               fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "6px" }}
//             >
//               {" "}
//               {/* استاد بحرالعلومی */}
//               {data?.teacherName}
//             </Typography>
//           </Stack>
//           <Typography
//             fontSize={{ lg: "18px", md: "13px", sm: "9px", xs: "4.5px" }}
//           >
//             {/* برنامه نویسی تحت فرانت و بکند */}
//             {data?.title}
//           </Typography>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default Specifications;



import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CourseDataComponent from "./CourseDataComponent";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ButtonComponent from "../../../../components/common/ButtonComponent";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useGetReserveAdd } from "../../../../core/services/api/courses";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

const Specifications = ({ data }) => {
  const { id } = useParams();
  const getReserveAdd = useGetReserveAdd();
  const queryClient = useQueryClient();

  return (
    <Box
      sx={{
        width: "30%",
        height: { lg: "645px", md: "405px", sm: "270px", xs: "200px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "4%",
        padding: "1%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          width: {lg:"100%",md:"100%",sm:"100%"},
          display: "flex",
          flexDirection: "column",
          marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"100px"},
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "secondary.main",
          padding: "20px",
          borderRadius: "12px",
        }}
        flex={5}
      >
        <Typography
          variant="h5"
          component={"h5"}
          sx={{
            fontSize: { lg: "24px", md: "20px", sm: "14px", xs: "12px" },
            fontWeight: "700",
            marginBottom: "16px",
            color: "primary.main",
          }}
        >
          مشخصات دوره
        </Typography>
        <CourseDataComponent
          avatarIcon={<HowToRegIcon />}
          text1={"تعداد دانشجو"}
          text2={data?.capacity}
          text1Style={{ fontSize: "8px" }}
          
        />
        <CourseDataComponent
          avatarIcon={<PeopleAltIcon />}
          text1={"وضعیت دوره"}
          text2={data?.courseLevelName}
          
        />
        <CourseDataComponent
          avatarIcon={<FingerprintIcon />}
          text1={"تاریخ شروع"}
          text2={moment(data?.startTime).format("yyyy/MM/DD")}
        />
        <CourseDataComponent 
          avatarIcon={<CalendarMonthIcon/>}
          text1={"تاریخ پایان"}
          
          text2={moment(data?.endtime).format("yyyy/MM/DD")}
        />
        <Stack
          sx={{
            width: "100%",
            flexDirection: { md:"row",sm: "column", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "background.paper",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            width={{lg:"40%",md:"50%", sm: "90%", xs: "90%" }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ButtonComponent
              fontSize={{ lg: "15px", md: "12px", sm: "10px", xs: "8px" }}
              width={{lg:"100%",md:"100%",sm:"100%"}}
              height={{ lg: "70%", xs: "100%" }}
              text={"شرکت در دوره"}
              onClick={() => {
                getReserveAdd.mutate(id, {
                  onSuccess: (data) => {
                    console.log("dataaamee", data);
                    queryClient.invalidateQueries({
                      queryKey: ["getNewsListId"],
                    });
                  },
                  onError: (res) => {
                    toast.error("ثبت نشد.!");
                  },
                });
              }}
            />
          </Box>
          <Box
            width={"40%"}
            display={"flex"}
            justifyContent={{ sm: "center", xs: "center" }}
            gap={"2%"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "9px" }}
              color={"primary.main"}
            >
              {data?.cost}
            </Typography>
            <Typography
              fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "9px" }}
            >
              تومان
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          width: {lg:"100%",md:"100%",sm:"100%"},
          display: "flex",
          marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"100px"},
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        flex={1}
      >
        <Box width={"20%"}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              width: { lg: "70px", md: "50px", sm: "35px", xs: "20px" },
              height: { lg: "70px", md: "50px", sm: "35px", xs: "20px" },
            }}
            src={
              data?.imageAddress?.length > 15
                ? data?.imageAddress
                : "src/assets/image/ostad.jpg"
            }
          />
        </Box>
        <Stack sx={{ flexDirection: "column", width: "70%" }}>
          <Stack flexDirection={"row"} gap={"3%"} alignItems={"center"}>
            <VerifiedIcon
              sx={{
                fontSize: { lg: "18px", md: "13px", sm: "11px", xs: "9px" },
                color: "primary.main",
              }}
            />
            <Typography
              fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "9px" }}
              fontWeight="bold"
            >
              {data?.teacherName}
            </Typography>
          </Stack>
          <Typography
            fontSize={{ lg: "18px", md: "13px", sm: "11px", xs: "9px" }}
            color="text.secondary"
          >
            {data?.title}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Specifications;
