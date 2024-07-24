import { ResponseTv, Tv } from "../../services/tv-show/type";
import { useEffect, useState } from "react";

import MovieCard from "../../components/movie-card";
import { getTvShow } from "../../services/tv-show";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const TvShow = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const [loading, setLoading] = useState(false);
  const [tvShowData, setTvShowData] = useState<ResponseTv>();
  useEffect(() => {
    fetchTv();
  }, [page]);

  const fetchTv = async () => {
    try {
      setLoading(true);
      const response = await getTvShow(page as string);

      setTvShowData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const previousPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage - 1}`);
  };

  return (
    <div>
      <div className="flex flex-col py-3 px-7">
        <label className="text-2xl font-semibold mb-5">Top Rated</label>
        {!loading ? (
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            {tvShowData?.results.map((item: Tv) => (
              <MovieCard
                poster_path={item.poster_path}
                title={item.name}
                release_date={item.first_air_date}
                size="w-40"
              />
            ))}
          </div>
        ) : (
          <div>loading...</div>
        )}

        <div className="flex flex-row justify-center py-5 gap-3 font-semibold">
          <button
            onClick={previousPage}
            disabled={Number(page) <= 1}
            className="relative block rounded bg-yellow-300 px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            Back
          </button>
          <div className="flex items-center gap-2">
            <p className="px-3 py-1.5"> Page {page}</p>
          </div>
          <button
            onClick={nextPage}
            className="relative block rounded bg-yellow-300 px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TvShow;
