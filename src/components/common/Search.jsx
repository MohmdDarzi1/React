


import React, { useState } from "react";
import {
  InputBase,
  Modal,
  IconButton,
  Button,
  Grid,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useGetAllCourses } from "../../core/services/api/courses";
import moment from "moment";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const StyledSearch = styled(Box)({
  // width:"100%",
  position: "relative",
  borderRadius: "16px",
  justifyContent: "space-between",
  paddingRight: "10px",
});

const SearchIconWrapper = styled(IconButton)({
  height: "100%",
  position: "absolute",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
});

const SearchComponent = ({
  isPending,
  data,
  onSearchChange,
  searchValue,
  placeholder,
  width,
  iconColor,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    onSearchChange(e);
  };

  return (
    <div>
      <StyledSearch
        sx={{
          backgroundColor: "secondary.main",
          width: width,
          // width:"100%",
          height: { lg: "56px", md: "45px", sm: "35px", xs: "25px" },
          lineHeight: { lg: "56px", md: "40px", sm: "30px", xs: "18px" },
        }}
      >
        <SearchIconWrapper onClick={handleOpen}>
          <SearchIcon
            sx={{
              fontSize: { lg: "25px", md: "18px", sm: "14px", xs: "12px" },
              color: {
                lg: "inherit",
                md: "inherit",
                sm: "inherit",
                xs: `${iconColor}`,
              },
            }}
          />
        </SearchIconWrapper>
        <InputBase
          autoFocus
          width={"180%"}
          sx={{ fontSize: { lg: "16px", md: "14px", sm: "12px", xs: "8px" } }}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={searchValue}
        />
      </StyledSearch>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 500,
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            borderRadius: "16px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box sx={{ flex: "0 1 auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              {/* <Typography variant="h6">Search Modal</Typography> */}
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            <InputBase
              autoFocus
              fullWidth
              placeholder={placeholder}
              onChange={handleInputChange}
              value={searchValue}
              sx={{
                marginBottom: 2,
                padding: 1,
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: "1 1 auto",
              overflowY: "auto",
              // backgroundColor: "#f9f9f9",
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {isPending ? (
              <Loader />
            ) : (
              data?.courseFilterDtos?.map((item) => (
                <Link to={`/courses/${item.courseId}`}>
                  <Box
                    key={item.courseId}
                    sx={{
                      width: "100%",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      // backgroundColor: "#fff",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={
                        item?.tumbImageAddress?.length > 15
                          ? item?.tumbImageAddress
                          : "../src/assets/image/Rectangle 124(4).png"
                      }
                      sx={{
                        width: "100px",
                        height: "50px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Box sx={{ flex: "1 1 auto" }}>
                      <Grid
                        container
                        spacing={2}
                        sx={{ textAlign: "center", alignItems: "center" }}
                      >
                        <Grid item xs={12} sm={4}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "12px",
                                lg: "16px",
                              },
                              color: "#bbb",
                              fontWeight: 500,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "12px",
                                lg: "16px",
                              },
                              color: "#bbb",
                            }}
                          >
                            {item.teacherName}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "12px",
                                lg: "16px",
                              },
                              color: "#bbb",
                            }}
                          >
                            {moment(item?.lastUpdate).format("YYYY/MM/DD")}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "12px",
                                lg: "16px",
                              },
                              color: "#bbb",
                            }}
                          >
                            {new Intl.NumberFormat("fa-IR", {}).format(
                              item.cost
                            )}{" "}
                            تومان
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "12px",
                                lg: "16px",
                              },
                              color: "#bbb",
                            }}
                          >
                            {item.levelName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Link>
              ))
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchComponent;
