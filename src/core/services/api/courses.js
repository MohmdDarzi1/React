import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../interceptors/interceptors";
import { APIRoutes } from "./APIRoutes/APIRoutes";
import { getReplyCommnet } from "./getReplyCommnet";
import { data } from "autoprefixer";

export const getCourseTop = async (count) => {
  try {
    const result = await http.get(APIRoutes.getCourseTop, {
      params: count,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCourses = async (
  searchValue,
  currentPage,
  selectValue,
  min,
  max,
  Technologies,
  CourseLevelId,
  CourseTypes
) => {
  console.log(
    "Technologies",
    Technologies.map((item) => item.id)
  );
  console.log(
    "lolo",
    CourseLevelId.map((item) => item.id)
  );

  const queryObj = {
    Query: searchValue,
    RowsOfPage: 9,
    PageNumber: currentPage,
    CostUp: max,
    CostDown: min,
    SortingCol:
      selectValue == 1
        ? "likeCount"
        : selectValue == 2
        ? "lastUpdate"
        : // : selectValue == 3
          // ? "cost"

          undefined,

    TechCount: Technologies.length,
    ListTech:
      Technologies.length > 0
        ? Technologies.map((item) => item.id).join(",")
        : undefined,

    // TechCount: CourseLevelId.length,
    CourseLevelId:
      CourseLevelId.length > 0
        ? CourseLevelId.map((item) => item.id).join(",")
        : undefined,

    // TechCount: CourseTypes.length,
    CourseTypes:
      CourseTypes.length > 0
        ? CourseTypes.map((item) => item.id).join(",")
        : undefined,
  };
  try {
    console.log("queryObj", queryObj);
    const result = await http.get(APIRoutes.getAllCourses, {
      params: queryObj,
    });
    // if (result) {
    return result;
    // } else {
    //   return console.log("دوره ها دریافت نشد");
    // }
  } catch (error) {
    console.log("allerror", error);
  }
};
export const useGetCourseTop = (count) => {
  return useQuery({
    queryKey: ["getCourseList"],
    queryFn: (data) => {
      console.log("Data", data);
      return getCourseTop(count);
    },
  });
};

export const useGetAllCourses = (
  searchValue,
  currentPage,
  selectValue,
  min,
  max,
  Technologies,
  CourseLevelId,
  CourseTypes
) => {
  return useQuery({
    queryKey: [
      "getAllCourses",
      searchValue,
      currentPage,
      selectValue,
      min,
      max,
      Technologies.join(","),
      CourseLevelId.join(","),
      CourseTypes.join(","),
    ],
    queryFn: (data) => {
      console.log("Data", data);
      return getAllCourses(
        searchValue,
        currentPage,
        selectValue,
        min,
        max,
        Technologies,
        CourseLevelId,
        CourseTypes
      );
    },
  });
};

const getCourseId = async (id) => {
  try {
    const result = await http.get(APIRoutes.CourseId, {
      params: {
        CourseId: id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetCourseId = (id) => {
  return useQuery({
    queryKey: ["getCourseListId", id],
    queryFn: (data) => {
      console.log("Data", data);
      return getCourseId(id);
    },
  });
};

const getCourseCommentId = async (id) => {
  try {
    const result = await http.get(
      APIRoutes.Coursecomment + "/" + id
      // params: {
      //   CourseId: id,
      // },
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetCourseCommentId = (id) => {
  return useQuery({
    queryKey: ["commentId", id],
    queryFn: (data) => {
      console.log("Data", data);
      return getCourseCommentId(id);
    },
  });
};

const getCourseLevelId = async (id) => {
  try {
    const result = await http.get(APIRoutes.CourseLevel, {
      params: {
        CourseLevel: id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const usegetCourseLevelId = (id) => {
  return useQuery({
    queryKey: ["level", id],
    queryFn: (data) => {
      console.log("Data", data);
      return getCourseLevelId(id);
    },
  });
};

const getCourseType = async (id) => {
  try {
    const result = await http.get(APIRoutes.CourseType, {
      params: {
        CourseType: id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const usegetCourseType = (id) => {
  return useQuery({
    queryKey: ["DataType", id],
    queryFn: (data) => {
      console.log("Data", data);
      return getCourseType(id);
    },
  });
};

const getTechnologies = async (id) => {
  try {
    const result = await http.get(APIRoutes.Technologies, {
      params: {
        Technologies: id,
      },
    });

    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetTechnologies = (id) => {
  return useQuery({
    queryKey: ["Technologies", id],
    queryFn: (data) => {
      // console.log("Technologies", data);
      return getTechnologies(id);
    },
  });
};

const getCourseReplyCommnets = async (courseId, commentId) => {
  try {
    const res = await http.get(
      APIRoutes.CourseReplyCommnets + "/" + courseId + "/" + commentId,
      {}
    );
    console.log("res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const useGetCourseReplyCommnets = () => {
  return useMutation({
    mutationKey: ["ReplyCommnets"],
    mutationFn: (data) => {
      // console.log("Technologies", data);
      return getCourseReplyCommnets(data.courseId, data.commentId);
    },
  });
};
//
const CourseCommnets = async (data) => {
  try {
    const res = await http.post(APIRoutes.AddCommentCourse, data);
    console.log("res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const useCourseCommnets = () => {
  return useMutation({
    mutationKey: ["CommnetsCourse"],
    mutationFn: (data) => {
      // console.log("Technologies", data);
      return CourseCommnets(data);
    },
  });
};
//
const getCourseLike = async (id) => {
  try {
    const result = await http.post(APIRoutes.AddCourseLike + id, {});
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetCourseLike = (id) => {
  return useMutation({
    queryKey: ["courseLike"],
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getCourseLike(id);
    },
  });
};

const getCourseDisLike = async (id) => {
  try {
    const result = await http.post(APIRoutes.AddCourseDissLike + id, {});
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetCourseDisLike = (id) => {
  return useMutation({
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getCourseDisLike(id);
    },
  });
};

const getFavoriteCourse = async (id) => {
  try {
    const result = await http.post(APIRoutes.AddCourseFavorite, {
      courseId: id,
    });

    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetFavoriteCourse = (id) => {
  return useMutation({
    mutationKey: ["getFavorite"],
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getFavoriteCourse(id);
    },
  });
};

const getReserveAdd = async (id) => {
  try {
    const result = await http.post(APIRoutes.ReserveAdd + id, { courseId: id });

    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetReserveAdd = () => {
  return useMutation({
    mutationKey: ["getFavorite"],
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getReserveAdd(id);
    },
  });
};

export const useGetReplyCommnet = () => {
  return useMutation({
    mutationKey: ["ReplyCommnets"],
    mutationFn: (data) => {
      // console.log("Technologies", data);
      return getReplyCommnet(data);
    },
  });
};

const CourseRate = async (CourseCommandId) => {
  try {
    const result = await http.post(
      APIRoutes.CourseRating + CourseCommandId,
      {}
    );
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useCourseRate = () => {
  return useMutation({
    queryKey: ["courseCommentLike"],
    mutationFn: (CourseCommandId) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", CourseCommandId);
      return CourseRate(CourseCommandId);
    },
  });
};

const getCourseLikeComment = async (id) => {
  try {
    const result = await http.post(
      APIRoutes.AddCourseCommentLike + id,

      {}
    );
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetCourseLikeComment = (id) => {
  return useMutation({
    queryKey: ["CourseCommentLikeId"],
    mutationFn: (id) => {
      console.log("ok id", id);
      return getCourseLikeComment(id);
    },
  });
};

const getCourseDisLikeComment = async (id) => {
  try {
    const result = await http.post(
      APIRoutes.AddCourseCommentDissLike + id,

      {}
    );
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetCourseDisLikeComment = (id) => {
  return useMutation({
    queryKey: ["CourseCommentLikeId"],
    mutationFn: (id) => {
      console.log("ok id", id);
      return getCourseDisLikeComment(id);
    },
  });
};

const DeleteCourseCommentLike = async (CourseCommandId) => {
  try {
    const result = await http.delete(
      `${APIRoutes.DeleteCourseCommentLike}?CourseCommandId=${CourseCommandId}`
    );
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useDeleteCourseCommentLike = () => {
  return useMutation({
    mutationKey: ["DeleteCourseCommentLike"],

    mutationFn: (CourseCommandId) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("deleteId", CourseCommandId);
      return DeleteCourseCommentLike(CourseCommandId);
    },
  });
};
