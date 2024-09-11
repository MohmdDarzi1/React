import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import CommentBlog from "./CourseComment";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CustomizedAccordions from "./acordionCourse";
import { useGetCourseCommentId } from "../../../../../core/services/api/courses";

const CourseDetailContentBottomBox = ({data}) => {

  // const {data,isPending}=useGetCourseCommentId();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        // height: { lg: "450px", md: "350px", sm: "220px", xs: "180px" },
        marginTop: "3%",
        // border: "1px solid red",
      }}
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              fontSize: { lg: "16px", md: "13px", sm: "10px", xs: "8px" },
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="توضیحات" value="1" />
              <Tab label="پیش نمایش ها" value="2" />
              <Tab label="نظرات کاربران" value="3" />
            </TabList>
          </Box>
          <Box>
            <TabPanel value="1" sx={{ padding: "2%" }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { lg: "24px", md: "16px", sm: "10px", xs: "6px" },
                  fontWeight: "700",
                  margin: "0",
                }}
              >
                {/* آموزش رایگان html{" "} */}
                {data?.googleTitle}
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  fontSize: { lg: "14px", md: "12px", sm: "7px", xs: "5px" },
                  fontWeight: "500",
                  marginTop: "2%",
                }}
              >
                {/* محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
                پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین
                کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل
                مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی
                جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز. */}
                {data?.miniDescribe}
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { lg: "24px", md: "16px", sm: "10px", xs: "6px" },
                  fontWeight: "700",
                  marginTop: "4%",
                }}
              >
                برای چه کسانی مناسب است ؟{" "}
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  fontSize: { lg: "14px", md: "12px", sm: "7px", xs: "5px" },
                  fontWeight: "500",
                  marginTop: "2%",
                }}
              >
                {/* محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
                پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین
                کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل
                مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی
                جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین
                کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛
                برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
                جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
                کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل
                مساله به روش کدنویسی پیشرفته و تمیز؛ */}
                {data?.describe}
              </Typography>
            </TabPanel>
            <TabPanel value="2">
              <CustomizedAccordions />
            </TabPanel>
            <TabPanel value="3">
              {" "}
              <CommentBlog data={data}  />{" "}
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default CourseDetailContentBottomBox;
