"use client";
import Top from "./components/Top";
import { CircularProgress } from "@mui/material";
import useWeather from "./hooks/useWeather";

export default function Home() {
  const { isLoading, handleIsLoading, weather, handleFetchWeather } =
    useWeather();

  const topPageProps = {
    handleIsLoading,
    handleFetchWeather,
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {isLoading ? (
        <CircularProgress />
      ) : weather === null ? (
        <Top {...topPageProps} />
      ) : (
        weather.temp
      )}
    </div>
  );
}
