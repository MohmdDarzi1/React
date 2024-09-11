import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PaginationComponent = ({ currentPage, onPageChange, totalCount }) => {
  // console.log("totalCount", totalCount, totalCount / 10);
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        textAlign: "center",
        marginBottom: "2%",
        direction: "ltr",
        marginTop: "120px",
      }}
    >
      <Pagination
        // tedad hesab kn
        onChange={(e) => {
          console.log("page change", e);
          onPageChange(parseInt(e.target.innerText));
        }}
        count={Math.ceil(totalCount / 10)}
        // count={3}
        page={currentPage}
        // defaultPage={1}
        // boundaryCount={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row-reverse",
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
