import { AuthPayload, AuthResponse } from "./type";

import { API } from ".";

const PostLogin = async (payload: AuthPayload) => {
  try {
    const response = await API.post(
      "https://dummyjson.com/auth/login",
      payload
    );
    console.log(response);
    return response.data as AuthResponse;
  } catch (error) {
    console.log(error);
  }
};

export { PostLogin };
