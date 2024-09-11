import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AppDetails from "./LandingArticles/AppDetails";
import HeroSection from "./HeroSection/HeroSection";
import ActionAreaCard from "./Services/AppServices";
import Appcourses from "./LandingCourses/Appcourses";
import GroupingCourses from "./GroupingCourses/GroupingCourses";
import Teachers from "./Teachers/Teachers";
import NotFound from "./404/NotFound";
import { useGetLanding } from "../../core/services/api/Landing";
import Loader from "../../components/common/Loader";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        {isPending ? (
          <Loader />
        ) : (
          // data.map(
          //   () => (
          <Box
            position={"relative"}
            top={"-50px"}
            color={"text.primary"}
            sx={{
              width: {
                xs: "300px",
                sm: "600px",
                md: "900px",
                lg: "1440px",
              },
            }}
          >
            <HeroSection />
            <ActionAreaCard />
            <Appcourses />
            <GroupingCourses />
            <div id="landingTeachers">
              {" "}
              <Teachers />
            </div>{" "}
            <AppDetails />
          </Box>
          // )


        )}
      </Box>
    </>
  );
};

export default Landing;
