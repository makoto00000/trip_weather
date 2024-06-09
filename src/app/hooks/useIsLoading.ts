import { useState } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const handleIsLoading = (value: boolean) => {
    setIsLoading(value);
  };
  return {
    isLoading,
    handleIsLoading,
  }
}