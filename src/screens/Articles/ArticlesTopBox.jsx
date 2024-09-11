import { Box, fontStyle } from "@mui/system";
import React, { useState } from "react";
import SearchComponent from "../../components/common/Search";
import { Icon, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)({});

const ArticlesTopBox = ({
  onSearchChange,
  searchValue,
  onSelectChange,
  selectValue,
}) => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClick = (id) => {
    setSelectedLink(id);
    onSelectChange(id);
  };
  console.log(selectValue, "sel");
  console.log(searchValue, "serch");

  // console.log(onSelectChange,"change")
  // const iconStyles = {
  //   display: 'none',
  //   ml: 1, // margin-left
  //   transition: 'display 0.3s ease',
  // };

  const hoverStyles = {
    "&:hover": {
      backgroundColor: "primary.main",
      color: "white",
    },
  };
  const selectedStyles = {
    backgroundColor: "primary.main", // رنگ پس‌زمینه در انتخاب شده
    color: "secondary.contrastText", // رنگ متن در انتخاب شده
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        marginTop: "2%",
        gap: "10px",
      }}
    >
      <SearchComponent
        width={{ lg: "600px", md: "400px", sm: "400px", xs: "200px" }}
        placeholder={" چی میخوای یاد بگیری؟"}
        onSearchChange={onSearchChange}
        value={searchValue}
      />

      <Box
        // value={selectValue}
        // onChange={onSelectChange}

        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "10px",
          width: { lg: "45%", md: "45%", sm: "70%", xs: "70%" },
          height: { lg: "50px", md: "40px", sm: "30px", xs: "25px" },
          // border: "1px solid red",
          borderRadius: "10px",
          backgroundColor: "secondary.main",
        }}
      >
        <StyledNavLink
          sx={{
            fontSize: { lg: "16px", md: "12px", sm: "12px", xs: "7px" },
            borderRadius: "10px",
            // width:"30px",
            textAlign: "center",
            ...(selectedLink === 1 ? selectedStyles : {}),
            ...hoverStyles,
          }}
          // value={1}
          // onClick={() => onSelectChange(1)}
          onClick={() => handleClick(1)}
          // to="#"
          variant={selectValue === 1 ? "contained" : "outlined"}
        >
          {/* <Icon className="hoverIcon" sx={iconStyles}></Icon> */}
          جدید ترین ها
        </StyledNavLink>

        <StyledNavLink
          sx={{
            fontSize: { lg: "16px", md: "12px", sm: "12px", xs: "7px" },
            borderRadius: "10px",
            // width:"30px",
            textAlign: "center",
            ...(selectedLink === 2 ? selectedStyles : {}),
            ...hoverStyles,
          }}
          // value={2}
          onClick={() => handleClick(2)}
          variant={selectValue === 2 ? "contained" : "outlined"}
          // to="#"
        >
          محبوب ترین ها
        </StyledNavLink>
        <StyledNavLink
          sx={{
            fontSize: { lg: "16px", md: "12px", sm: "12px", xs: "7px" },
            borderRadius: "10px",
            // width:"30px",
            textAlign: "center",
            ...(selectedLink === 3 ? selectedStyles : {}),
            ...hoverStyles,
          }}
          // value={3}
          onClick={() => handleClick(3)}
          variant={selectValue === 3 ? "contained" : "outlined"}
        >
          {" "}
          پر بازدید ترین ها
        </StyledNavLink>
        <StyledNavLink
          sx={{
            fontSize: { lg: "16px", md: "12px", sm: "12px", xs: "7px" },
            borderRadius: "10px",
            // width:"70px",
            textAlign: "center",
            ...(selectedLink === 4 ? selectedStyles : {}),
            ...hoverStyles,
          }}
          onClick={() => handleClick(4)}
          variant={selectValue === 4 ? "contained" : "outlined"}
        >
          {" "}
          همه
        </StyledNavLink>
      </Box>
    </Box>
  );
};

export default ArticlesTopBox;
