import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-row w-full font-bold justify-between px-10 py-3 shadow-xl bg-yellow-300">
      <h2 className="text-2xl">MOVIE 21</h2>
      <div className="flex flex-row gap-12">
        <Link to={"/"}>Home</Link>
        <Link to={"/tv-show"}>TV Show</Link>
        <Link to={"/movie"}>Movie</Link>
        <div onClick={handleLogout} className="hover:cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
}

export default Navbar;
