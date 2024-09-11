import { Button, styled } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const StyledLink = styled(Link)({});
  const StyledNavLink = styled(NavLink)({});
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: { xl: "48px", lg: "48px", md: "30px", sm: "20px", xs: "20px" },
        alignItems: "flex-start",
        flex: "7",
        height: "29px",
      }}
    >
      <NavLink to={"/courses"}>دوره ها</NavLink>
      {location.pathname === "/" ? (
        <a
          href="#landingTeachers"
          sx={{
            display: { lg: "block", md: "block", sm: "block", xs: "none" },
          }}
        >
          اساتید
        </a>
      ) : (
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            
          }}
          href="#landingTeachers"
        >
          اساتید
        </a>
      )}
      <a
        href="#footer"
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
      >
        ارتباط با ما
      </a>
      <StyledNavLink
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
        to={"/articles"}
      >
        اخبار و مقالات
      </StyledNavLink>
      <StyledNavLink
        sx={{ display: { lg: "none", md: "none", sm: "none", xs: "block" } }}
        to={"/articles"}
      >
        اخبار
      </StyledNavLink>
      {/* <StyledNavLink
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
        to={"/studentPanel"}
      >
        پنل(موقت){" "}
      </StyledNavLink> */}
    </Box>
  );
};

export default Navbar;
