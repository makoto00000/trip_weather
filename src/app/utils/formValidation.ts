export const validateDate = (value: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 今日の0時に設定
  const selectedDate = value;
  const oneWeekFromNow = new Date(today);
  oneWeekFromNow.setDate(today.getDate() + 6);
  return (
    (selectedDate >= today && selectedDate <= oneWeekFromNow) ||
    "日付は現在の日付から1週間以内である必要があります。"
  );
};

export const validateAddress = (value: string) => {
  const regex = /^[a-zA-Z]+$/;
  return (
    (value && regex.test(value)) ||
    "地名はアルファベットのみで入力してください。"
  );
};