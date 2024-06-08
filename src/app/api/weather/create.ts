"use server";

import { ExternalWeather } from "@/app/types/Weather";
import { Weather } from "@prisma/client";

export const postWeather = async (externalWeather: ExternalWeather) => {
  const address = externalWeather.address;
  const datetime = new Date(externalWeather.days[0].datetime);
  const temp = externalWeather.days[0].temp;
  const tempmax = externalWeather.days[0].tempmax;
  const tempmin = externalWeather.days[0].tempmin;
  const precipprob = externalWeather.days[0].precipprob;
  const windspeed = externalWeather.days[0].windspeed;
  const uvindex = externalWeather.days[0].uvindex;
  const conditions = externalWeather.days[0].conditions;
  const icon = externalWeather.days[0].icon;
  const weather = {
    address,
    datetime,
    temp,
    tempmax,
    tempmin,
    precipprob,
    windspeed,
    uvindex,
    conditions,
    icon,
  };

  try {
    const response = await fetch(`${process.env.ROOT_URL}/api/weather`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...weather,
      }),
    });
    const data: { message: string; weather: Weather } = await response.json();
    return data.weather;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
