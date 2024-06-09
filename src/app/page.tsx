"use client";
import Top from "./components/Top";
import { CircularProgress } from "@mui/material";
import useWeather from "./hooks/useWeather";
import Result from "./components/Result";
import Error from "./components/Error";

export default function Home() {
  const {
    isLoading,
    handleIsLoading,
    weather,
    handleFetchWeather,
    clearWeather,
  } = useWeather();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {isLoading && <CircularProgress />}
      {!isLoading && weather === undefined && (<Top {...{ handleIsLoading, handleFetchWeather }} />)}
      {!isLoading && weather === null && <Error clearWeather={clearWeather} />}
      {!isLoading && weather !== null && weather !== undefined && (<Result {...{ weather, clearWeather }} />)}
    </div>
  );
}
