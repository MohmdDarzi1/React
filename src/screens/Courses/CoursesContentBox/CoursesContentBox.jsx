import { styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../components/common/PaginationComponent";
import CoursesContentCards from "./CoursesContentCards/CoursesContentCards";
import TopContentCoursesStack from "./TopContentCoursesStack/TopContentCoursesStack";
import { useGetAllCourses } from "../../../core/services/api/courses";


const CoursesContentBox = ({ Cost, Technologie,CourseLv ,CourseType}) => {
  const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const [selectValue, setSelectValue] = useState(1);
  // useEffect(() => {
  //   console.log("searchValue", searchValue);
  // }, [searchValue]);

  const { data, isPending, isError } = useGetAllCourses(
    searchValue,
    currentPage,
    selectValue,
    Cost[0],
    Cost[1],
    Technologie,
    CourseLv,
    CourseType,
  );


  console.log("data", data, isPending);

  return (
    <Stack
      sx={{
        width: "66%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TopContentCoursesStack
        onSearchChange={(e) =>
          setSearchValue(e.target.value ? e.target.value : undefined)
        }
        searchValue={searchValue}
        onSelectChange={(e) => {
          // console.log("event", e);
          setSelectValue(e.target.value);
        }}
        selectValue={selectValue}
      />
      <CoursesContentCards data={data} isPending={isPending} />
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        totalCount={data?.totalCount}
      />
    </Stack>
  );
};

export default CoursesContentBox;
