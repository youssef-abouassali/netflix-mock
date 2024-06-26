import axios from "axios";
import requests from "../Requests";
import { HtmlHTMLAttributes, useEffect, useState } from "react";

interface Movie {
  title: string;
  backdrop_path: string;
  release_date: number;
  overview: string;
}

const Main = () => {
  const [movies, SetMovise] = useState<Movie[]>([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      SetMovise(response.data.results);
    });
  }, []);

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className=" text-white border-gray-300 py-2 px-5 ml-4  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
