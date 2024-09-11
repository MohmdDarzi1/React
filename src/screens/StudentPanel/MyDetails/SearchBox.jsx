import { Box, TextField, styled } from "@mui/material";
import React from "react";
// import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ onSearchChange, searchValue }) => {
  const SearchIconWrapper = styled("div")({
    height: "100%",
    position: "absolute",
    left: "0",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
  });
  return (
    <div>
      <Box sx={{ width: {lg:"800px",md:"400px"} }}>
        <TextField sx={{ width: "100%" }} placeholder="  دوره های من....  "
     
           onChange={onSearchChange}
           value={searchValue}
        />{" "}
                 {/* <SearchIconWrapper>
        <SearchIcon
          sx={{
            fontSize: { lg: "25px", md: "18px", sm: "14px", xs: "12px" },
            color: {
              lg: "inherit",
              md: "inherit",
              sm: "inherit",
              // xs: `${iconColor}`,
            },
          }}
        />
      </SearchIconWrapper> */}
      </Box>
    </div>
  );
};

export default SearchBox;
