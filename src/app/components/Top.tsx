import Image from "next/image";
import { ReactNode } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { validateAddress, validateDate } from "../utils/formValidation";
import { formatDate } from "../utils/formatter";

export default function Top({
  handleIsLoading,
  handleFetchWeather,
}: {
  handleIsLoading: (value: boolean) => void;
  handleFetchWeather: (data: {
    datetime: string;
    address: string;
  }) => Promise<void>;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleIsLoading(true);
    const formattedData = {
      datetime: formatDate(data.datetime),
      address: String(
        data.address.charAt(0).toUpperCase() +
          data.address.slice(1).toLowerCase()
      ),
    };

    await handleFetchWeather(formattedData);
    handleIsLoading(false);
  };

  return (
    <div className="bg-content-background rounded-md flex justify-center items-center flex-col p-10 shadow-lg relative max-w-screen-md">
      <div className="flex mb-10">
        <div className="font-kanit fontweight-bold font text-5xl mr-4">
          Trip
        </div>
        <div className="font-kanit fontweight-bold text-5xl mr-4">Weather</div>
        <Image
          src={"/logo_icon.png"}
          width={45}
          height={48}
          alt={"logo"}
        ></Image>
      </div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-96 mb-10">
          <label className="text-2xl fontweight-bold mb-2">日付を入力</label>
          <Controller
            name="datetime"
            control={control}
            defaultValue={new Date()}
            rules={{ required: "日付は必須です。", validate: validateDate }}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  {...field}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="yyyy/MM/dd"
                />
              </LocalizationProvider>
            )}
          />
          {errors.datetime && <p className="text-error">{errors.datetime.message as ReactNode}</p>}
        </div>
        <div className="flex flex-col w-96 mb-10">
          <label className="text-2xl fontweight-bold mb-2">地名を入力</label>

          <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{ required: "地名は必須です。", validate: validateAddress }}
            render={({ field }) => <TextField {...field} variant="outlined" />}
          />
          {errors.address && <p className="text-error">{errors.address.message as ReactNode}</p>}
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#4C6B8A", ":hover": { background: "#6E93B8" } }}
          >
            旅先の天気をみる
          </Button>
        </div>
      </form>
    </div>
  );
}
