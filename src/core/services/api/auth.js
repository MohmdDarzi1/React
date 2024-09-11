import { useMutation } from "@tanstack/react-query";
import http from "../../interceptors/interceptors";
import { APIRoutes } from "../api/APIRoutes/APIRoutes";

export const loginAPI = async (user) => {
  try {
    const response = await http.post(APIRoutes.loginAPI, user);
    return response;
  } catch (error) {
    return false;
  }
};

export const useLoginApi = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("DataLogin", data);
      return loginAPI(data);
    },
  });
};

export const SignApi = async (user) => {
  try {
    const response = await http.post(APIRoutes.SignApi, user);
    return response;
  } catch (error) {
    return false;
  }
};

export const useSignApi = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("DataSignUp", data);
      return SignApi(data);
    },
  });
};

export const SignApiData = async (user) => {
  try {
    const response = await http.post(APIRoutes.VerifyMessage, user);
    return response;
  } catch (error) {
    return false;
  }
};
export const useSignApiData = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("DataSignUp2", data);
      return SignApiData(data);
    },
  });
};

export const SignRegester = async (user) => {
  try {
    const response = await http.post(APIRoutes.SignRegester, user);
    return response;
  } catch (error) {
    return false;
  }
};
export const useSignRegester = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("DataSignRegester", data);
      return SignRegester(data);
    },
  });
};

export const RessetPassword = async (user) => {
  try {
    const response = await http.post(APIRoutes.RessetPassword, user);
    return response;
  } catch (error) {
    return false;
  }
};
export const useRessetPassword = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("DataRessetPassword3", data);
      return RessetPassword(data);
    },
  });
};

export const RessetPass3 = async (user) => {
  try {
    const response = await http.post(APIRoutes.RessetPass3, user);
    return response;
  } catch (error) {
    return false;
  }
};
export const useRessetPass3 = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log("DataRessetPassword3", data);
      return RessetPass3(data);
    },
  });
};
