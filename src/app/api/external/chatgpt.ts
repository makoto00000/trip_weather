"use server";

import { translatedWeathers } from "@/app/types/Weather";
import { displayDate } from "@/app/utils/formatter";

export default async function getTouristInfo(
  datetime: Date,
  address: string,
  icon: string
) {
  const formattedDate = displayDate(datetime);
  const formattedIcon = icon.split("-").join("")
  let weather = "指定なし";
  if (translatedWeathers[formattedIcon]) {
    weather = translatedWeathers[formattedIcon];
  }
  try {
    const request = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CHATGPT_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "user",
            content: `${formattedDate}に${address}で旅行をします。天気は${weather}です。おすすめの観光スポットを3つ箇条書きで教えてください。`,
          },
        ],
      }),
    });
    if (request.ok) {
      const data = await request.json();
      return data.choices[0].message.content;
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
