import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../interceptors/interceptors";
import { APIRoutes } from "../api/APIRoutes/APIRoutes";

export const getNews = async (searchValue, currentPage, count, selectValue) => {
  const queryObj = {
    Query: searchValue,
    PageNumber: currentPage,
    RowsOfPage: count,
    SortingCol:
      selectValue == 1
        ? "currentLikeCount"
        : selectValue == 2
        ? "currentView"
        : selectValue == 3
        ? "updateDate"
        : selectValue == 4
        ? "currentView"
        : undefined,
  };
  try {
    const result = await http.get(APIRoutes.TopNews, {
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

export const useGetTopNews = (searchValue, currentPage, count, selectValue) => {
  return useQuery({
    queryKey: ["getTopNews", searchValue, currentPage, count, selectValue],
    queryFn: (data) => {
      console.log("Data", data);
      return getNews(searchValue, currentPage, count, selectValue);
    },
  });
};

export const getAllNews = async () => {
  try {
    const result = await http.get(APIRoutes.AllNews);
    // if (result) {
    return result;
    // } else {
    //   return console.log("دوره ها دریافت نشد");
    // }
  } catch (error) {
    console.log("allerror", error);
  }
};

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ["getAllNews"],
    queryFn: (data) => {
      console.log("Data", data);
      return getAllNews();
    },
  });
};

const getNewsId = async (id) => {
  try {
    const result = await http.get(APIRoutes.NewsId + id, {});
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const useGetNewsId = (id) => {
  return useQuery({
    queryKey: ["getNewsListId", id],
    queryFn: () => getNewsId(id),
  });
};

// const getNewsLike = async (id) => {
//   try {
//     const response = await fetch(APIRoutes.NewsLike, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ id }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching news like:", error);
//     throw error;
//   }
// };

// export const useGetNewsLike = (id) => {
//   return useQuery({
//     queryKey: ["getNewsLike", id],
//     queryFn: () => getNewsLike(id),
//   });
// };

const getNewsLike = async (id) => {
  try {
    const result = await http.post(APIRoutes.NewsLike + "/" + id, {});
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetNewsLike = (id) => {
  return useMutation({
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getNewsLike(id);
    },
  });
};

const getNewsDisLike = async (id) => {
  try {
    const result = await http.post(APIRoutes.NewsDissLike + "/" + id, {});
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetNewsDisLike = (id) => {
  return useMutation({
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getNewsDisLike(id);
    },
  });
};

const getFavoriteNews = async (id) => {
  try {
    const result = await http.post(APIRoutes.AddFavoriteNews + id, {});
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetFavoriteNews = (id) => {
  return useMutation({
    mutationKey: ["getFavorite"],
    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getFavoriteNews(id);
    },
  });
};

const getDeleteFavoriteNews = async (id) => {
  try {
    const result = await http.delete(APIRoutes.DeleteFavoriteNews, {
      data: id,
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useGetDeleteFavoriteNews = (id) => {
  return useMutation({
    mutationKey: ["deleteFavorite"],

    mutationFn: (id) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      console.log("ok id", id);
      return getDeleteFavoriteNews(id);
    },
  });
};

const getNewsReplyCommnets = async (commentId) => {
  try {
    const res = await http.get(APIRoutes.RepliesComments + commentId, {});
    console.log("res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const useGetNewsReplyCommnets = () => {
  return useMutation({
    mutationKey: ["ReplyCommnets"],
    mutationFn: (data) => {
      // console.log("Technologies", data);
      return getNewsReplyCommnets(data.commentId);
    },
  });
};

const getNewsLikeCommnets = async (data) => {
  try {
    const res = await http.post(
      APIRoutes.CommentLike + "/" + data.id + "?LikeType=" + data.likeType,
      {}
    );
    console.log("res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const useGetNewsLikeCommnets = () => {
  return useMutation({
    mutationKey: ["ReplyCommnets"],
    mutationFn: (data) => {
      // console.log("Technologies", data);
      return getNewsLikeCommnets(data);
    },
  });
};

const NewsRating = async (id, RateNumber) => {
  try {
    const result = await http.post(
      APIRoutes.NewsRate,
      {},
      {
        params: {
          NewsId: id,
          RateNumber: RateNumber,
        },
      }
    );
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error fetching news like:", error);
    throw error;
  }
};

export const useNewsRate = () => {
  return useMutation({
    queryKey: ["newsRate"],
    mutationFn: (data) => {
      // queryKey: ["getNewsLike", id],
      // queryFn: () => getNewsLike(id),
      // console.log("ok id", id, RateNumber);
      return NewsRating(data.id, data.RateNumber);
    },
  });
};
