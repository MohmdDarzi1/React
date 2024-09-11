


import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled, Stack } from "@mui/material";
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import Dashboard from "./Dashboard/Dashboard";
import EditProfile from "./EditProfile/EditProfile";
import RessetPasswordmy from "./RessetPasswordmy";
import MyDetails from "./MyDetails/MyDetails";
import { useDispatch } from "react-redux";
import ReserveDetails from "./ReserveDetails/ReserveDetails";
import Exit from "./Exit/Exit";

const StudentPanel = () => {
  const [value, setValue] = React.useState("1");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const StyledTab = styled(Tab)(({ theme }) => ({
    "&.Mui-selected": {
      // backgroundColor: "#6033FF",
      borderRadius: "10px",
      // color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      // color: "#fff",
      transition: "background-color 0.3s ease",
    },
    marginBottom: "10px",
    padding: "10px",
  }));

  const TabContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "20%",
    backgroundColor: "#6F5DE3",
    padding: "16px",
    // color: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    height: "100%",
  }));

  const ContentContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: "80%",
    padding: "24px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // backgroundColor: "#fff",
  }));

  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: "center",
     
      padding: "20px" }}>
      <Box
        position={"relative"}
        color={"text.primary"}
        sx={{
          width: { xs: "300px", sm: "600px", md: "900px", lg: "1440px" },
          // backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <TabContext value={value}>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <TabContainer>
              <ProfileDetail />
              <TabList
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  marginTop: "16px",
                }}
                textColor="#fff"
                indicatorColor="transparent"
              >
                <StyledTab label="داشبرد" value="1" />
                <StyledTab label="ویرایش پروفایل" value="2" />
                <StyledTab label="دوره های من" value="3" />
                <StyledTab label="تغییر رمز عبور" value="4" />
                <StyledTab label=  "رزرو دوره ها" value="5" />
                <StyledTab label="خروج از حساب" value="6" />
              </TabList>
            </TabContainer>

            <ContentContainer>
              <TabPanel sx={{ width: "100%" }} value="1">
                <Dashboard />
              </TabPanel>
              <TabPanel sx={{ width: "100%" }} value="2">
                <EditProfile />
              </TabPanel>
              <TabPanel sx={{ width: "100%" }} value="3">
                <MyDetails />
              </TabPanel>
              <TabPanel sx={{ width: "100%" }} value="4">
                <RessetPasswordmy />
              </TabPanel>
              <TabPanel sx={{ width: "100%" }} value="5">
               <ReserveDetails  />
              </TabPanel>
              <TabPanel sx={{ width: "100%" }} value="6">
              <Exit />
              </TabPanel>
            </ContentContainer>
          </Stack>
        </TabContext>
      </Box>
    </Box>
  );
};

export default StudentPanel;
