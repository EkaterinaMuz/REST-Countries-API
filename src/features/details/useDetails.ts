import { useEffect } from "react";
import { loadCountry, resetCountry } from "./detailsSlice";
import { useAppDispatch } from "features/store";

export default function useDetails(name: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCountry(name));
    return () => {
      dispatch(resetCountry());
    };
  }, [name, dispatch]);
}
