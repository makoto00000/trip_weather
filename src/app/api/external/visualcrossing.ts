import { ExternalWeather } from "@/app/types/Weather";

export const getWeather = async (datetime: string, address: string) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}/${datetime}/${datetime}?unitGroup=metric&key=${process.env.VISUALCROSSING_API_KEY}&contentType=json`,
      {
        cache: "no-store",
      }
    );
    if (response.ok) {
      const weather: ExternalWeather = await response.json();
      return weather;
    } else {
      throw new Error(String(await response.text()))
    }
  } catch (error: any) {
    console.log(error.message)
    return null;
  }
};
