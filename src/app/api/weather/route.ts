import { PrismaClient, Weather } from "@prisma/client";
import { NextRequest } from "next/server";
import { getWeather } from "../external/visualcrossing";
import { postWeather } from "./create";
import { WeatherData } from "@/app/types/Weather";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("failed db connect");
  }
}

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    const datetime = String(params.get("datetime"));
    const address = String(params.get("address"));
    await main();
    const weather = await prisma.weather.findFirst({
      where: {
        datetime: new Date(datetime),
        address: address,
      },
    });
    // DBに存在していればDBから取得
    if (weather !== null) {
      return Response.json(
        {
          message: "Successfully retrieved weather data from database",
          weather: { ...weather, id: Number(weather.id) },
        },
        { status: 200 }
      );
    // DBに存在していなければ外部APIから取得しDBに保存
    } else {
      const externalWeather = await getWeather(datetime, address);

      if (externalWeather === null || externalWeather === undefined) {
        throw new Error("Can Not Get External Weather Data");
      }
      const createdWeather: Weather | null = await postWeather(externalWeather);
      if (createdWeather !== null) {
        return Response.json(
          {
            message: "Successfully retrieved weather data from visualcrossing",
            weather: createdWeather,
          },
          { status: 200 }
        );
      } else {
        throw new Error("Can Not Create Weather Data");
      }
    }
  } catch (error: any) {
    return Response.json(
      { message: error.message, weather: null },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: NextRequest) {
  try {
    const weatherData: WeatherData = await request.json();
    await main();
    const weather = await prisma.weather.create({
      data: weatherData,
    });
    return Response.json(
      { message: "Success", weather: { ...weather, id: Number(weather.id) } },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json(
      { message: error.message, weather: null },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
