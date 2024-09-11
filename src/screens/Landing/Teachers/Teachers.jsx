import React from "react";
import { CardMedia, Radio, Stack, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Slider from "./Slider";
import But from "./But";
import Name from "./Name";
import MassageTeachers from "./MassageTeachers";
import { Box } from "@mui/system";
import { useGetAllTeachers } from "../../../core/services/api/teacher";
import Loader from "../../../components/common/Loader";

const Teachers = () => {
  // const [selectedValue, setSelectedValue] = useState("a");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  const { data, isPending } = useGetAllTeachers();
  console.log("dataaaa", data);
  return (
    <Box
      sx={{
        width: { lg: "1200px", md: "900px", sm: "600px", xs: "300px" },
        margin: "auto",
      }}
    >
      <MassageTeachers />

      <Swiper
        width={250}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        flexDirection="row-reverse"

        // style={{backgroundColor:"red"}}
      >
        <Stack
          sx={{
            direction: "ltr",
            //  marginRight:"100px",
            width: { lg: "1280px", md: "900px", sm: "900px", xs: "300px" },
            height: "745px",
            border: "1px solid #ccc",
            backgroundColor: "#E3F2FD",
          }}
        >
          <Stack
            display="ruby"
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              // marginRight:"100px",
              width: { lg: "1200px", md: "800px", sm: "500px" },
              height: "564px",
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              backgroundColor: "#E3F2FD",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{
                backgroundColor: "white",
                width: { lg: "1380px", md: "700px" },
                // height: "440px",
                border: "1px solid #ccc",
                display: "ruby",
                justifyContent: "center",
                margin: "auto",
                // backgroundColor: "#E3F2FD",
              }}
            >
              {isPending ? (
                <Loader />
              ) : (
                data?.map((item) => (
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      width: { lg: "26px", md: "296px" },
                      height: "382px",
                      border: "1px solid #ccc",
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                      backgroundColor: "#E3F2FD",
                    }}
                  >
                    <SwiperSlide>
                      <Slider
                        img={item.pictureAddress}
                        name={item.fullName}
                        newsCount={item.newsCount}
                      />
                    </SwiperSlide>
                  </Stack>
                ))
              )}
            </Stack>
            <Radio />
          </Stack>
        </Stack>
      </Swiper>
    </Box>
  );
};

export default Teachers;
