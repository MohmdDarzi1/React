

import {
  Box,
  CardMedia,
  Typography,
  Stack,
  styled,
  IconButton,
  CircularProgress,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useGetMyCourses } from "../../../core/services/api/user";
import moment from "moment";
import SearchBox from "./SearchBox";
import Sorting from "./Sorting";
import PaginationComponent from "../../../components/common/PaginationComponent";

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const CourseCard = styled(Box)(({ theme }) => ({
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "10px",
  marginTop: "20px",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const MyDetails = () => {
  const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectValue, setSelectValue] = useState(1);
  const { data, isPending, isError } = useGetMyCourses(
    searchValue,
    currentPage,
    selectValue
  );
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%", padding: { xs: "10px", sm: "20px" } }}>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid grey",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        <StyledStack>
          <Typography variant="h5">داشبورد</Typography>
          <Stack
            sx={{
              gap: "15px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton component={Link} to={"/"}>
              <NotificationsIcon />
            </IconButton>
            <IconButton component={Link} to={"/"}>
              <LocalGroceryStoreOutlinedIcon />
            </IconButton>
          </Stack>
        </StyledStack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <SearchBox
          onSearchChange={(e) =>
            setSearchValue(e.target.value ? e.target.value : undefined)
          }
          searchValue={searchValue}
        />

        <Sorting
          searchValue={searchValue}
          onSelectChange={(e) => setSelectValue(e.target.value)}
          selectValue={selectValue}
        />
      </Box>
 

<Grid
      container
      spacing={2}
      sx={{
        marginBottom: "20px",
        textAlign: "center",
        backgroundColor: "primary.main",
        justifyContent: "center",
        borderRadius: "15px",
        padding: "10px", // برای فاصله داخلی
      }}
    >
      {['تصویر', 'نام دوره', 'مدرس', 'تاریخ شروع', 'قیمت', 'پرداختی'].map((text, index) => (
        <Grid
          item
          xs={12}
          sm={2}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "8px", md: "16px",lg:"20px" }, // تنظیم اندازه فونت برای سایزهای مختلف صفحه
            }}
          >
            {text}
          </Typography>
        </Grid>
      ))}
    </Grid>
      {isPending ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        data?.listOfMyCourses?.map((item) => (
          <CourseCard key={item.courseId}>
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              <Grid item xs={12} sm={2}>
                <CardMedia
                  component="img"
                  image={
                    !item?.tumbImageAddress ||
                    item?.tumbImageAddress === "undefined"
                      ? "src/assets/image/ostad.jpg"
                      : item?.tumbImageAddress
                  }
                  sx={{ width: "100px", height: "50px", borderRadius: "10px" }}
                  alt={item?.courseTitle}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "12px",md:"12px",lg:"16px" } }}>
                  {item?.courseTitle}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "8px",md:"12px",lg:"16px" } }}>
                  {item?.fullName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "8px",md:"12px",lg:"16px" } }}>
                  {moment(item?.lastUpdate).format("yyyy/MM/DD")}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "8px",md:"12px",lg:"16px" } }}>
                  {item?.cost} تومان
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "12px",md:"12px",lg:"16px" } }}>
                  {item?.paymentStatus}
                </Typography>
              </Grid>
            </Grid>
          </CourseCard>
        ))
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <PaginationComponent
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalCount={data?.totalCount}
        />
      </Box>
    </Box>
  );
};

export default MyDetails;
