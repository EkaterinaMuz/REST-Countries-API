import { useAppDispatch } from "features/store";
import { useEffect } from "react";
import { loadNeighbours } from "./detailsSlice";

export default function useNeighbours(borders: string[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighbours(borders));
    }
  }, [borders, dispatch]);
}
