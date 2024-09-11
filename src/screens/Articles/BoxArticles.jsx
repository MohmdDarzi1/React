import React from "react";
import ArticlesCard from "./ArticlesCard";
import { Box } from "@mui/system";
// import { useGetAllNews } from "../../core/services/api/News";

const BoxArticles = () => {
  // const params = {
  //   count: 1,
  // };
  // const { data, isPending, isError } = useGetAllNews();
  // // console.log("all courses::isPending", isPending);
  // console.log("all News", data);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",

        // width: { lg: "400px", md:"300px" ,sm:"350px", xs:"1280px"},
        // height: "360px",
      }}
    >
      {/* {isPending ? <div>loading</div> : data.map((item) =>  */}
      <ArticlesCard />
      {/* // )} */}
    </Box>
  );
};

export default BoxArticles;
