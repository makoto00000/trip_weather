import { Button } from "@mui/material";
import { Weather } from "@prisma/client";
import Image from "next/image";
import { displayDate } from "../utils/formatter";

export default function Result({
  weather,
  clearWeather,
  handleTouristInfo,
}: {
  weather: Weather;
  clearWeather: () => void;
  handleTouristInfo: (datetime: Date, address: string, icon: string) => void;
}) {
  return (
    <div className="md:container bg-content-background rounded-md flex justify-center items-center flex-col p-10 pb-20 shadow-lg relative">
      <div className="flex lg:justify-center items-center flex-col lg:flex-row mb-16 w-full lg:w-2/3">
        <div className="flex justify-between items-center flex-col w-full lg:w-1/2 mb-10 lg:mb-0 lg:mr-2">
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
            <div className="text-5xl font-bold mr-4">
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
        <div className="w-full md:w-2/3 lg:w-6/12">
          <div className="border-t-2 grid grid-cols-6 p-4">
            <div className="col-span-3 text-xl font-bold grid grid-cols-3 gap-4 place-items-center">
              <div className="col-span-2 place-content-center">降水確率</div>
              <Image
                className="col-start-3"
                src="/rain.png"
                width={50}
                height={50}
                alt="rain"
              />
            </div>
            <div className="text-2xl font-bold col-start-5 col-span-2 place-content-center grid grid-cols-2">
              <div className={"text-right"}>{weather.precipprob}</div>
              <span className="text-sm font-bold ml-2 text-left place-content-end">
                %
              </span>
            </div>
          </div>
          <div className="border-t-2 grid grid-cols-6 p-4">
            <div className="col-span-3 text-xl font-bold grid grid-cols-3 gap-4 place-items-center">
              <div className="col-span-2 place-content-center">UV指数</div>
              <Image
                className="col-start-3"
                src="/uv.png"
                width={50}
                height={50}
                alt="uv"
              />
            </div>
            <div className="text-2xl font-bold col-start-5 col-span-2 place-content-center grid grid-cols-2">
              <div className={"text-right"}>{weather.uvindex}</div>
              <span className="text-sm font-bold ml-2 text-left place-content-end"></span>
            </div>
          </div>
          <div className="border-t-2 border-b-2 grid grid-cols-6 p-4">
            <div className="col-span-3 text-xl font-bold grid grid-cols-3 gap-4 place-items-center">
              <div className="col-span-2 place-content-center">風速</div>
              <Image
                className="col-start-3"
                src="/wind.png"
                width={50}
                height={50}
                alt="wind"
              />
            </div>
            <div className="text-2xl font-bold col-start-5 col-span-2 place-content-center grid grid-cols-2">
              <div className={"text-right"}>{weather.windspeed}</div>
              <span className="text-sm font-bold ml-2 text-left place-content-end">
                m/s
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start md:justify-center items-center">
        <Button
          className="cursor-pointer"
          onClick={clearWeather}
          type="button"
          variant="contained"
          sx={{ background: "#4C6B8A", ":hover": { background: "#6E93B8" } }}
        >
          他の旅先も調べる
        </Button>
      </div>
      <div className="w-3/4 flex justify-end absolute bottom-10">
        <div className="relative h-full cursor-pointer animate-zoomOut hover:animate-zoomIn">
          <Image
            className="max-w-32 lg:max-w-40"
            src={`/speech_bubble.png`}
            width={240}
            height={120}
            alt="speech bubble"
          ></Image>
          <div
            className="text-[8px] lg:text-[10px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4"
            onClick={() =>
              handleTouristInfo(weather.datetime, weather.address, weather.icon)
            }
          >
            この天気におすすめの観光地をお探しします。
          </div>
        </div>
        <Image
          className=""
          src={`/concierge_icon.png`}
          width={60}
          height={100}
          alt="concierge icon"
        ></Image>
      </div>
    </div>
  );
}
