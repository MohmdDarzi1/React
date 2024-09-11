import { Box, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

import DetailCard from "./DetailCard";
import { useGetTopNews } from "../../../core/services/api/News";
import { Title } from "@mui/icons-material";
import Loader from "../../../components/common/Loader";

const LeftDetails = (name) => {
  
  const params={
    count:3,
  }
  const { data, isPending } = useGetTopNews(undefined, 1, params.count);
  console.log("dataaaa", data);
  return (
    <Box
      flexDirection={{lg:"column",md:"column",sm:"column",xs:"row"}}
      // height={"526px"}
      width={{lg:"606px" ,md:"500px",sm:"450px",xs:"400px"}}
      // my={4}
      marginLeft={"350px"}
    flex
  flexWrap={{lg:"nowrap",md:"wrap",sm:"nowrap",xs:"wrap"}}
  
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      gap={2}
      p={2}
      
    >
             {isPending ? (
        <Loader/>
        ) : (
          data?.news.map((data) => <DetailCard data={data}   />
          
          ))}
        {/* <DetailCard image="src/assets/image/photo(2).png" />
        <DetailCard image="src/assets/image/photo(1).png"/> */}

    </Box>
  );
};

export default LeftDetails;
