interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
  handleNavigate?: () => void;
}

const MovieCard = (props: Props) => {
  const { title, poster_path, release_date, size, handleNavigate } = props;
  return (
    <div
      className={`flex flex-col text-center font-semibold shadow-lg hover:shadow-gray-600 rounded-2xl overflow-hidden ${size}`}
      onClick={handleNavigate}
    >
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
      />
      <label className="text-base">{title}</label>
      <p className="text-sm">{release_date}</p>
    </div>
  );
};

export default MovieCard;
