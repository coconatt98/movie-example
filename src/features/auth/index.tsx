import { ChangeEvent, FormEvent, useState } from "react";

import { PostLogin } from "../../services/auth/api";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const payload = {
      username,
      password,
    };

    try {
      const response = await PostLogin(payload);

      if (response?.token) {
        localStorage.setItem("token", response?.token as string);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen gap-2"
    >
      <label className="font-semibold">Authentication</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="border border-gray-400 rounded-full text-center"
      />
      <input
        type="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        className="border border-gray-400 rounded-full text-center"
      />
      <button className="bg-black text-white rounded-full py-1 px-5">
        Login
      </button>
    </form>
  );
};

export default Authentication;
