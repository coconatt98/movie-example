import { API } from ".";
import { DetailMovieResponse } from "./type";

const getDetails = async (id: string) => {
  try {
    const response = await API.get(`/movie/${id}`);

    console.log(response);

    return response.data as DetailMovieResponse;
  } catch (error) {
    console.log(error);
  }
};

export { getDetails };
