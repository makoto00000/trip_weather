import { Button } from "@mui/material";
import { Weather } from "@prisma/client";
import Image from "next/image";
import { displayDate } from "../utils/formatter";

export default function Result({
  weather,
  clearWeather,
}: {
  weather: Weather;
  clearWeather: () => void;
}) {
  return (
    <div className="md:container bg-content-background rounded-md flex justify-center items-center flex-col p-10 shadow-lg">
      <div className="flex justify-center items-center mb-12 w-2/3">
        <div className="flex justify-between items-center flex-col w-1/2 mr-2">
          <div className="flex mb-4">
            <div className="text-2xl font-bold mr-4">
              {displayDate(weather.datetime)}
            </div>
            <div className="text-2xl font-bold">{weather.address}</div>
          </div>
          <Image
            className="mb-4"
            src={`/weather/${weather.icon}.png`}
            width={100}
            height={100}
            alt="weather_logo"
          ></Image>
          <div className="flex justify-center items-center">
            <div className="text-4xl font-bold mr-4">
              {weather.temp}
              <span className="text-2xl font-bold">℃</span>
            </div>
            <div>
              <div className="text-xl font-bold text-high">
                {weather.tempmax}
                <span className="text-sm font-bold">℃</span>
              </div>
              <div className="text-xl font-bold text-low">
                {weather.tempmin}
                <span className="text-sm font-bold">℃</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <table className="w-full">
            <tbody>
              <tr className="border-t-2 flex justify-between items-center w-full p-4">
                <td className="flex justify-center items-center text-xl font-bold">
                  降水確率
                  <Image
                    className="ml-2"
                    src="/rain.png"
                    width={50}
                    height={50}
                    alt="rain"
                  ></Image>
                </td>
                <td className="text-xl font-bold">
                  {weather.precipprob}
                  <span className="text-sm font-bold ml-2">%</span>
                </td>
              </tr>
              <tr className="border-t-2 flex justify-between items-center w-full p-4">
                <td className="flex justify-center items-center text-xl font-bold">
                  UV指数
                  <Image
                    className="ml-2"
                    src="/uv.png"
                    width={50}
                    height={50}
                    alt="rain"
                  ></Image>
                </td>
                <td className="text-xl font-bold">
                  {weather.uvindex}
                  <span className="text-sm font-bold ml-2">%</span>
                </td>
              </tr>
              <tr className="border-t-2 flex justify-between items-center w-full border-b-2 p-4">
                <td className="flex justify-center items-center text-xl font-bold">
                  風速
                  <Image
                    className="ml-2"
                    src="/wind.png"
                    width={50}
                    height={50}
                    alt="rain"
                  ></Image>
                </td>
                <td className="text-xl font-bold">
                  {weather.windspeed}
                  <span className="text-sm font-bold ml-2">%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Button
          onClick={clearWeather}
          variant="contained"
          sx={{ background: "#4C6B8A", ":hover": { background: "#6E93B8" } }}
        >
          他の旅先も調べる
        </Button>
      </div>
    </div>
  );
}
