import { Box, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import BottomHeroSectionBox from "./Middle/BottomHeroSectionBox";
import TopHeroSectionBox from "./Middle/TopHeroSectionBox";
import RightBox from "./Right/RightBox";
import LeftBox from "./Left/LeftBox";
import SearchComponent from "../../../components/common/Search";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/slices/darkModeSlice";
import { useGetAllCourses } from "../../../core/services/api/Landing";

const HeroSection = () => {
  const mode = useSelector(selectDarkMode);
  const [searchValue, setSearchValue] = useState("");
  const { data } = useGetAllCourses(searchValue);
console.log(data,"daadaa")
  const StyledStack = styled(Stack)({
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundImage: `url(src/assets/image/heroSection${mode}.png)`,
    backgroundSize: "cover",
    borderBottomLeftRadius: "30%",
    borderBottomRightRadius: "30%",
  });

  const MiddleBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex: "3",
  });

  return (
    <Box
      width={"100%"}
      justifyContent={"center"}
      zIndex={2}
      height={{ lg: "900px", md: "750px", sm: "650px", xs: "450px" }}
    >
      <StyledStack>
        <LeftBox />
        <MiddleBox>
          <TopHeroSectionBox />
          <SearchComponent
        data={data}
            onSearchChange={(e) => setSearchValue(e.target.value)}
            searchValue={searchValue}
            placeholder={"چی میخوای یاد بگیری؟"}
            width={{ lg: "724px", md: "650px", sm: "500px", xs: "300px" }}
          />
          <BottomHeroSectionBox />
        </MiddleBox>
        <RightBox />
      </StyledStack>
    </Box>
  );
};

export default HeroSection;
