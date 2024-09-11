import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../interceptors/interceptors";
import { APIRoutes } from "./APIRoutes/APIRoutes";

const getProfile = async () => {
  try {
    const response = await http.get(APIRoutes.getProfile);

    return response;
  } catch (error) {
    return false;
  }
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
};

export const PasswordChange = async (user) => {
  try {
    const response = await http.post(APIRoutes.ChangePassword, user);
    return response;
  } catch (error) {
    return false;
  }
};
export const usePasswordChange = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("userPassword", data);
      return PasswordChange(data);
    },
  });
};

export const getMyCourses = async (searchValue, currentPage, selectValue) => {
  // console.log()
  const queryobj = {
    Query: searchValue,
    PageNumber: currentPage,
    RowsOfPage: 5,
    SortingCol:
      selectValue == 1
        ? "fullName"
        : selectValue == 2
        ? "levelName"
        : // : selectValue == 3
          // ? "cost"

          undefined,
  };
  try {
    console.log("queryObj", queryobj);
    const result = await http.get(APIRoutes.MyCourses, {
      params: queryobj,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetMyCourses = (searchValue, currentPage, selectValue) => {
  return useQuery({
    queryKey: ["myCourses", searchValue, currentPage, selectValue],
    queryFn: (data) => {
      console.log("Data", data);
      return getMyCourses(searchValue, currentPage, selectValue);
    },
  });
};

export const editProfile = async (data) => {
  try {
    const response = await http.put(APIRoutes.EditProfile, data);
    return response;
  } catch (error) {
    return false;
  }
};

export const useEditProfile = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("EditProfile", data);
      return editProfile(data);
    },
  });
};

const getCurrentUserProfile = async () => {
  try {
    const response = await http.put(APIRoutes, data);
    return response;
  } catch (error) {
    return false;
  }
};

export const useGetCurrentUserProfile = () => {
  return useQuery({
    queryKey: ["getCurrentUserProfile"],
    queryFn: (data) => {
      console.log("Data", data);
      return getCurrentUserProfile();
    },
  });
};

export const ProfileImage = async (user) => {
  try {
    const response = await http.post(APIRoutes.AddProfileImage, user);
    return response;
  } catch (error) {
    return false;
  }
};
export const useGetProfileImage = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("AddProfileImagedata", data);
      return ProfileImage(data);
    },
  });
};

export const GetMyFavoriteCourses = async () => {
  try {
    const result = await http.get(APIRoutes.MyFavoriteCourses, {
      // params: count,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetMyFavoriteCourses = () => {
  return useQuery({
    queryKey: ["myCourses"],
    queryFn: (data) => {
      console.log("Data", data);
      return GetMyFavoriteCourses();
    },
  });
};

export const GetMyFavoriteNews = async (count) => {
  try {
    const result = await http.get(APIRoutes.MyFavoriteNews);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetMyFavoriteNews = () => {
  return useQuery({
    queryKey: ["myNews"],
    queryFn: (data) => {
      console.log("Data", data);
      return GetMyFavoriteNews();
    },
  });
};

export const GetMyCoursesReserve = async () => {
  try {
    const result = await http.get(APIRoutes.MyCoursesReserve);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetMyCoursesReserve = () => {
  return useQuery({
    queryKey: ["MyCoursesReserve"],
    queryFn: (data) => {
      console.log("Data", data);
      return GetMyCoursesReserve();
    },
  });
};

const getDeleteCourseReserve = async (id) => {
  try {
    const result = await http.delete(APIRoutes.DeleteCourseReserve, {
      data: { id: id },
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetDeleteCourseReserve = () => {
  return useMutation({
    mutationKey: ["DeleteCourseReserve"],

    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("delete id", id);
      return getDeleteCourseReserve(id);
    },
  });
};




const CourseImageDelete = async (id) => {
  try {
    const result = await http.delete(APIRoutes.DeleteProfileImage, {
      data: { id: id },
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useCourseImageDelete = () => {
  return useMutation({
    mutationKey: ["DeleteCourseimage"],

    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("delete id", id);
      return CourseImageDelete(id);
    },
  });
};