import { Weather } from "@prisma/client";
import { useState } from "react";

export default function useWeather(handleIsLoading: (value: boolean) => void) {

  const [weather, setWeather] = useState<Weather | null | undefined>();
  const handleFetchWeather = async (data: {
    datetime: string;
    address: string;
  }) => {
    handleIsLoading(true);
    const response = await fetch(
      `/api/weather?datetime=${data.datetime}&address=${data.address}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const fetchData: { message: string; weather: Weather | null } =
      await response.json();
    setWeather(fetchData.weather);
    handleIsLoading(false);
  };

  const clearWeather = () => {
    setWeather(undefined);
  };

  return {
    weather,
    handleFetchWeather,
    clearWeather,
  };
}
