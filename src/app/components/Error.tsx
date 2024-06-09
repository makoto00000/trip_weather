import { Button } from "@mui/material";

export default function Error({ clearWeather }: { clearWeather: () => void }) {
  return (
    <div className="bg-content-background rounded-md flex justify-center items-center flex-col p-10 shadow-lg">
      <div className="font-bold text-xl mb-8">存在しない地名です。<br />もう一度入力してください。</div>
      <div>
        <Button
          onClick={clearWeather}
          type="submit"
          variant="contained"
          sx={{ background: "#4C6B8A", ":hover": { background: "#6E93B8" } }}
        >
          戻る
        </Button>
      </div>
    </div>
  );
}
