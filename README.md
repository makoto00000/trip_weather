# Trip Weather

## アプリ概要

URL: <https://trip-weather-gamma.vercel.app/>

![trip_weather_top](https://github.com/makoto00000/trip_weather/assets/65654634/f98764eb-c0b7-473c-a41e-2615836efb39)

- 地域を選択すると、天気が分かるサービス
- インターネットに公開して、旅行に行く人が現地の天気を確認する目的で利用。

## 使い方

1. 現在から1週間以内の日付を選択
2. 地名をアルファベットで入力（都道府県名または都市名 例: Tokyo, Yokohama）
3. 「旅先の天気をみる」をクリック
4. 指定した場所の天気情報が表示される
5. 「この天気のおすすめの観光地を紹介します」をクリック
6. おすすめの観光地情報が表示される

## 仕様

- 取得した天気情報はDBに格納して、同じ日の同一地域の天気情報はDBから取得する。

## 環境

### 開発環境

- Next.js 14.2.3
- Prisma 5.15.0
- TypeScript
- Tailwind CSS

### 主要ライブラリ

- React Hook Form
- MUI

### デプロイ先

- Vercel (+ Vercel Postgres)

### その他使用技術

- [visualcrossing](https://www.visualcrossing.com/)（天気取得API）
- [ChatGPT](https://openai.com/chatgpt/)（観光地提案機能）

## 機能一覧

### 天気情報取得機能

- 地名、日付から天気情報を取得
- 取得できる情報は以下
  - 気温（最大/最低）
  - 降水確率
  - 風速
  - 紫外線指数

### 天気に応じた観光地の提案

- AIが「日付」「地名」「天気」から、おすすめの観光スポットを提案してくれる。

## DB

| カラム名   | 意味           | データ型 | PK   | FK   | NOT NULL | INDEX | DEFAULT |
| :--------- | :------------- | :------- | :--- | :--- | :------- | :---- | :------ |
| id         | weather ID     | bigint   | ◯   |      | ◯       | ◯    |         |
| address    | 地名           | string   |      |      | ◯       | ◯    |         |
| datetime   | 日時           | datetime |      |      | ◯       | ◯    |         |
| temp       | 気温           | float    |      |      | ◯       |       |         |
| tempmin    | 最低気温       | float    |      |      | ◯       |       |         |
| tempmax    | 最高気温       | float    |      |      | ◯       |       |         |
| precipprob | 降水確率       | float    |      |      | ◯       |       |         |
| windspeed  | 風速           | float    |      |      | ◯       |       |         |
| uvindex    | UV指数         | int      |      |      | ◯       |       |         |
| conditions | 天気           | string   |      |      | ◯       |       |         |
| icon       | 天気のアイコン | string   |      |      | ◯       |       |         |
| created_at | 作成日時       | datetime |      |      | ◯       |       |         |
| updated_at | 更新日時       | datetime |      |      | ◯       |       |         |

## UIデザイン

![trip_weather_top](https://github.com/makoto00000/trip_weather/assets/65654634/f98764eb-c0b7-473c-a41e-2615836efb39)
![trip_weather_result](https://github.com/makoto00000/trip_weather/assets/65654634/ea0c4833-a283-4f4a-9efe-9f6b843e0d86)
![trip_weather_tourist_attractions](https://github.com/makoto00000/trip_weather/assets/65654634/03f6d939-d23b-4001-82c0-3325a8d64cc3)
