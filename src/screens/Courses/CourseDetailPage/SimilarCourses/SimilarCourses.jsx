import { Box, Stack } from "@mui/system";
import CardCourse from "../../../../components/common/CardCourse";
import MassageCourse from "../../../Landing/LandingCourses/MassageCourse";
import { useGetCourseTop } from "../../../../core/services/api/courses";
import Loader from "../../../../components/common/Loader";

const SimilarCourses = () => {
  const params = {
    count: 4,
  };
  const { data, isPending, isError } = useGetCourseTop(params);
  
  console.log("similardata", isPending);
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <MassageCourse text={"دوره های مشابه"} />
        <Stack
          direction={{ xl: "row", lg: "row", md: "row", sm: "row", xs: "row" }}
          justifyContent={"space-around"}
          display={"flex"}
          flexWrap={"wrap"}
          alignItems="center"
          width={"100%"}
        >
          {isPending ? (
          <Loader/>
          ) : (
            data.map((item) => <CardCourse key={item.courseId} course={item} />)
          )}
        
        </Stack>
      </Stack>
    </Box>
  );
};

export default SimilarCourses;
