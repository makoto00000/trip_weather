"use client";
import Top from "./components/Top";
import { CircularProgress } from "@mui/material";
import useWeather from "./hooks/useWeather";
import Result from "./components/Result";
import Error from "./components/Error";
import useLoading from "./hooks/useIsLoading";
import useTourist from "./hooks/useTourist";
import Tourist from "./components/Tourist";

export default function Home() {
  const { isLoading, handleIsLoading } = useLoading();
  const { weather, handleFetchWeather, clearWeather } =
    useWeather(handleIsLoading);
  const { touristInfo, handleTouristInfo, clearTouristInfo } =
    useTourist(handleIsLoading);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {isLoading && <CircularProgress />}
      {!isLoading && weather === undefined && (
        <Top {...{ handleIsLoading, handleFetchWeather }} />
      )}
      {!isLoading && weather === null && <Error clearWeather={clearWeather} />}
      {!isLoading && weather && touristInfo === undefined && (
        <Result {...{ weather, clearWeather, handleTouristInfo }} />
      )}
      {!isLoading && weather && touristInfo && (
        <Tourist
          {...{ weather, clearWeather, touristInfo, clearTouristInfo }}
        />
      )}
    </div>
  );
}
