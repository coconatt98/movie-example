import { useEffect, useState } from "react";

import { DetailMovieResponse } from "../../services/movie/details/type";
import { getDetails } from "../../services/movie/details";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<DetailMovieResponse>();

  useEffect(() => {
    fetchMovieById();
  }, [id]);

  const fetchMovieById = async () => {
    try {
      setLoading(true);

      const response = await getDetails(id as string);

      setMovie(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col p-3 bg-blue-300 m-10 rounded-lg items-center">
        Detail Movie
      </div>
      {!loading ? (
        <div className="flex flex-col border border-blue-300 px-10 py-5 m-10 rounded-lg">
          <div className="flex flex-row">
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w154/${movie?.poster_path}`}
            />
            <div className="flex flex-col px-5">
              <h1 className="font-semibold text-3xl">{movie?.title}</h1>
              <p>{movie?.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Details;
