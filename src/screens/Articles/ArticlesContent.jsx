import { Stack } from "@mui/system";
import React from "react";
import BoxArticles from "./BoxArticles";
import { Pagination } from "@mui/material";
import { useGetAllNews } from "../../core/services/api/News";
import ArticlesCard from "./ArticlesCard";
import Loader from "../../components/common/Loader";

const ArticlesContent = ({ isPending, data }) => {
  // console.log("art",BoxArticles)
  // const params = {
  //   count: 1,
  // };
  // const { data, isPending, isError } = useGetAllNews(params);
  return (
    <Stack
      sx={{
        flexDirection: "row",
        display: "flex",
        flexFlow: "wrap",

        justifyContent: "space-around",
        width: "100%",
        

        // height: "1605px",
      }}
    >
      {isPending ? (
     <Loader/>
      ) : (
        data.map((item) => <ArticlesCard item={item}  />)
      )}
      {/* <BoxArticles /> */}
      {/* <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles />
      <BoxArticles /> */}
    </Stack>
  );
};

export default ArticlesContent;
