import { useState } from "react";
import getTouristInfo from "../api/external/chatgpt";

export default function useTourist(handleIsLoading: (value: boolean) => void) {
  const [touristInfo, setTouristInfo] = useState<string | null | undefined>();

  const handleTouristInfo = async(datetime: Date, address: string, icon: string)=> {
    handleIsLoading(true);
    setTouristInfo(await getTouristInfo(datetime, address, icon))
    handleIsLoading(false);
  }

  const clearTouristInfo = () => {
    setTouristInfo(undefined);
  };

  return {
    touristInfo,
    handleTouristInfo,
    clearTouristInfo,
  };
}