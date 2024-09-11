import http from "../../interceptors/interceptors";
import { APIRoutes } from "./APIRoutes/APIRoutes";

export const getReplyCommnet = async (data) => {
  try {
    const res = await http.post(APIRoutes.AddReplyCourseComment  , data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
