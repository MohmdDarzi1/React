// import { Box, CardMedia, Stack, Typography } from "@mui/material";
// import moment from "moment";
// import React from 'react'

// const DashBordNews = ({data}) => {
//   return (
//     <div>
//           <Stack
//       sx={{
//         flexDirection: "row",
//         width: "130%",
//         height: "100px",
//         // border: "1px solid red",
//         marginRight: "3px",
//         display: "flex",
//         justifyContent: "right",
//         gap: "10px",
//         flexDirection: "column",
//       }}
//     >
//       {data?.map((items) => (
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             margin: "10px",
//             flexDirection: "column",
//             flexFlow: "wrap",

//             width: "100%",
//           }}
//         >
//           <CardMedia
//             image="src/assets/image/3.png"
//             // image={items?.currentImageAddressTumb}
//             sx={{ width: "70px", height: "70px", display: "flex" }}
//           />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           >
//             <Typography sx={{ display: "flex", height: "10px" }}>
//               {items?.title}
//               {/* اموزش رایگان هستش */}
//             </Typography>
//             <Typography>
//                 {items?.teacheName}
//                 {/* mmd */}
//                  </Typography>
//           </Box>
//           <Box
//             sx={{ display: "flex", justifyContent: "left", marginTop: "55px" }}
//           >
//             <Typography>
//               {/* {items?.updateDate} */}
//               {moment(items?.updateDate).format("yyyy/MM/DD")}
//               {/* 50000تومان */}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Stack>
//   {/* ); */}
//     </div>
//   )
// }

// export default DashBordNews

// import { Box, CardMedia, Typography, Stack } from "@mui/material";
// import moment from "moment";

// const StyledCard = ({ items }) => (
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       margin: "10px",
//       padding: "10px",
//       borderRadius: "10px",
//       // backgroundColor: "#fff",
//       boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.2s",
//       '&:hover': {
//         transform: "scale(1.02)",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//       }
//     }}
//   >
//     <CardMedia
//       component="img"
//       image="src/assets/image/3.png"
//       // image={items?.currentImageAddressTumb}
//       sx={{
//         width: "70px",
//         height: "70px",
//         borderRadius: "8px",
//         marginRight: "10px",
//       }}
//     />
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         flexGrow: 1,
//       }}
//     >
//       <Typography variant="subtitle1" sx={{ fontWeight: 600 ,margin:"10px",fontSize:"14px"}}>
//         {items?.title}
//       </Typography>
//       <Typography variant="body2" color="text.secondary" sx={{margin:"10px"}}>
//         {items?.teacherName}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {moment(items?.updateDate).format("YYYY/MM/DD")}
//       </Typography>
//     </Box>
//   </Box>
// );

// const MyComponent = ({ data }) => (
//   <Stack
//     sx={{
//       width: "100%",
//       height: "100%",
//       // padding: "16px",
//       // gap: "16px",
//       flexDirection: "column",
//       // backgroundColor: "#f4f4f9",
//     }}
//   >
//     {data?.map((items) => (
//       <StyledCard key={items.id} items={items} />
//     ))}
//   </Stack>
// );

// export default MyComponent;

import { Box, CardMedia, Typography, Stack } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const StyledCard = ({ items }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/blogDetails/" + items.id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        image="src/assets/image/3.png"
        // image={items?.currentImageAddressTumb}
        sx={{
          width: "70px",
          height: "70px",
          borderRadius: "8px",
          marginRight: "10px",
          cursor: "pointer",
        }}
        onClick={handleImageClick}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, margin: "10px", fontSize: "14px" }}
        >
          {items?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "10px" }}
        >
          {items?.teacherName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {moment(items?.updateDate).format("YYYY/MM/DD")}
        </Typography>
      </Box>
    </Box>
  );
};

const MyComponent = ({ data }) => (
  <Stack
    sx={{
      width: "100%",
      height: "100%",
      flexDirection: "column",
    }}
  >
    {data?.map((items) => (
      <StyledCard key={items.id} items={items} />
    ))}
  </Stack>
);

export default MyComponent;
