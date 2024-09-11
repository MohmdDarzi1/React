import { useQuery } from "@tanstack/react-query";
import http from "../../interceptors/interceptors";
import { APIRoutes } from "../api/APIRoutes/APIRoutes";

export const getLanding = async () => {
  try {
    const result = await http.get(APIRoutes.LandingReport);
    // if (result) {
    return result;
    // } else {
    //   return console.log("دوره ها دریافت نشد");
    // }
  } catch (error) {
    console.log("allerror", error);
  }
};

export const useGetLanding = () => {
  return useQuery({
    queryKey: ["getallLanding"],
    queryFn: (data) => {
      console.log("Data", data);
      return getLanding();
    },
  });
};

export const getAllCourses = async (searchValue) => {
  const queryObj = {
    Query: searchValue,
  };
  try {
    console.log("queryObj", queryObj);
    const result = await http.get(APIRoutes.getAllCourses, {
      params: queryObj,
    });

    return result;
  } catch (error) {
    console.log("allerror", error);
  }
};

export const useGetAllCourses = (searchValue) => {
  return useQuery({
    queryKey: ["getAllCourses", searchValue],
    queryFn: (data) => {
      console.log("Data", data);
      return getAllCourses(searchValue);
    },
  });
};
