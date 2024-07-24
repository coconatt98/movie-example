import { API } from "../tv-show"
import { ResponseTv } from "./type";

const getTvShow = async (page: string) => {
  try {
    const response = await API.get(`/tv/top_rated?language=en-US&page=${page}`);

    return response.data as ResponseTv;
  } catch (error) {
    console.log(error);
  }
};

export { getTvShow };
