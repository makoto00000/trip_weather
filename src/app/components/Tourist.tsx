import { Button } from "@mui/material";
import { Weather } from "@prisma/client";
import Image from "next/image";
import { displayDate } from "../utils/formatter";
import { translatedWeathers } from "@/app/types/Weather";

export default function Tourist({
  weather,
  clearWeather,
  touristInfo,
  clearTouristInfo,
}: {
  weather: Weather;
  clearWeather: () => void;
  touristInfo: string | null | undefined;
  clearTouristInfo: () => void;
}) {
  const handleReset = () => {
    clearWeather();
    clearTouristInfo();
  };
  return (
    <div className="bg-content-background rounded-md flex justify-center items-center flex-col p-10 pb-20 shadow-lg relative max-w-screen-md">
      <div className="w-full flex mb-5 text-lg font-bold">
        <div className="mr-5">{displayDate(weather.datetime)}</div>
        <div className="mr-5">{weather.address}</div>
        <div>{translatedWeathers[weather.icon]}</div>
      </div>
      <div className="w-full bg-background shadow-inner p-5 overflow-scroll rounded-md font-bold text-lg mb-16">
        {touristInfo}
      </div>
      <div className="w-full flex justify-start md:justify-center items-center">
        <Button
          className="cursor-pointer"
          onClick={handleReset}
          type="button"
          variant="contained"
          sx={{ background: "#4C6B8A", ":hover": { background: "#6E93B8" }}}
        >
          他の旅先も調べる
        </Button>
      </div>
      <div className="w-full flex justify-end absolute bottom-10 pr-10">
        <div className="relative h-full">
          <Image
            className="max-w-32 lg:max-w-40"
            src={`/speech_bubble.png`}
            width={240}
            height={120}
            alt="speech bubble"
          ></Image>
          <div className="text-[8px] lg:text-[10px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4">
            おすすめの観光地です。
            <br />
            楽しんできてくださいね。
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
