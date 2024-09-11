import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import CardCourse from "../../../../components/common/CardCourse";
import Loader from "../../../../components/common/Loader";

const CoursesContentCards = ({ data, isPending }) => {

  console.log("all courses", data);
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "100%",
        // border: "1px solid blue",
        padding: "2%",
        gap: "1%",
      }}
    >
      {isPending ? (
        <Loader/>
      ) : (
        data?.courseFilterDtos.map((item) => (
          <CardCourse key={item.courseId} course={item} />
        ))
      )}
    </Stack>
  );
};

export default CoursesContentCards;
