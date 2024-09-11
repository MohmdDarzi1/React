import { Box, Stack } from "@mui/system";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SearchComponent from "../../../../components/common/Search";
import {
  usegetCourseLevelId,
  usegetCourseType,
} from "../../../../core/services/api/courses";
import { useParams } from "react-router-dom";
import Technologies from "./Technologies";
import CourseTypes from "./CourseTypes";
import CourseLevelId from "./CourseLevelId";

const CoursesFilterBoxContent = ({
  Cost,
  onSliderChange,
  dastebandi,
  noeClass,
  level,
  Technologie,
  setTechnologie,
  CourseLv,
  setCourseLv,
  CourseType,
  setCourseType,
}) => {
  const StyledSearchComponent = styled(SearchComponent)({});
  function valuetext(value) {
    return `${value}تومان `;
  }

  // const [value, setValue] = useState([0, 1000000]);
  // const { data, isPending, isError } = useGetAllCourses(Cost);
  // const handleChange = ( newValue) => {
  //   setCost(newValue);
  // };

  const handleChange = (event, newValue) => {
    onSliderChange(newValue);
    console.log(newValue, "nevalue");
    console.log(event, "event");
  };
  return (
    <Stack
    elevation={6}
      sx={{
        width: "100%",
        // border: "1px solid green",
        // height: "100%",
        marginTop: "5%",
        marginBottom: "5%",
        flexDirection: "column",
        alignItems: "center",
        fontSize: { lg: "16px", md: "12px", sm: "10px", xs: "6px" },
      }}
    >
      <Accordion   elevation={6} sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          دسته بندی ها{" "}
        </AccordionSummary>
        <AccordionDetails   elevation={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Technologies
            dastebandi={dastebandi}
            Technologie={Technologie}
            setTechnologie={setTechnologie}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion   elevation={6} sx={{ width: "100%" }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          قیمت{" "}
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Stack
              // Value={Cost}
              // onChange={onSelectChange}
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "13px", sm: "7px", xs: "4px" },
                }}
              >
                از {Cost[0]} تومان
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "13px", sm: "7px", xs: "3px" },
                }}
              >
                تا {Cost[1]} تومان
              </Typography>
            </Stack>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={Cost}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={1999999999}
              // sx={{display:"flex", flexDirection:"row-reverse"}}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion   elevation={6} sx={{ width: "100%" }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
   نوع برگذاری
        </AccordionSummary>
        <AccordionDetails>
          <CourseTypes
            noeClass={noeClass}
            CourseType={CourseType}
            setCourseType={setCourseType}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion   elevation={6} sx={{ width: "100%" }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          
        >
         سطح دوره
        </AccordionSummary>
        <AccordionDetails>
          {/* <StyledSearchComponent
            iconColor={"transparent"}
            placeholder={"جستجوی استاد"}
          /> */}
          <CourseLevelId
            level={level}
            setCourseLv={setCourseLv}
            CourseLv={CourseLv}
          />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default CoursesFilterBoxContent;
