export type ExternalWeather = {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: Day[];
  alerts: string[];
  stations: Stations;
  currentConditions: CurrentConditions;
};

type Day = {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string[];
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: string[];
  source: string;
  hours: Hour[];
};

type Hour = {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number | null;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string[] | null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: string;
  icon: string;
  stations: string[];
  source: string;
};

type Stations = {
  [key: string]: Station;
};

type Station = {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
};

type CurrentConditions = {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number | null;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string[] | null;
  windgust: number | null;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: string;
  icon: string;
  stations: string[];
  source: string;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
};

export type WeatherData = {
  address: string;
  datetime: Date;
  temp: number;
  tempmax: number;
  tempmin: number;
  precipprob: number;
  windspeed: number;
  uvindex: number;
  conditions: string;
  icon: string;
};

export const translatedWeathers: { [key: string]: string } = {
  clearday: "晴れ",
  clearnight: "晴れ",
  cloudy: "曇り",
  fog: "霧",
  hail: "あられ",
  partlycloudyday: "晴れときどき曇り",
  partlycloudynight: "晴れとくどき曇り",
  rainsnowshowersday: "雨、雪、にわか雨",
  rainsnowshowersnight: "雨、雪、にわか雨",
  rainsnow: "雨雪",
  rain: "雨",
  showersday: "にわか雨",
  showersnight: "にわか雨",
  sleet: "みぞれ",
  snowshowersday: "にわか雪",
  snowshowersnight: "にわか雪",
  snow: "雪",
  thunderrain: "雷雨",
  thundershowersday: "雷雨",
  thundershowersnight: "雷雨",
  thunder: "雷",
  wind: "強風",
};
