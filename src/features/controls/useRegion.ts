import { useAppDispatch } from "features/store";
import { useSelector } from "react-redux";
import { selectorSelectValue } from "./ControlsSelectors";
import { setSelectValue } from "./controlsSlice";
import { Region } from "types";
import { CountryOption } from "./CustomSelect";
import { SingleValue } from "react-select";

type onSelect = (reg: SingleValue<CountryOption>) => void;

export default function useRegion(): [Region | '', onSelect ] {
  const dispatch = useAppDispatch();
  const region = useSelector(selectorSelectValue);

  const handleChange: onSelect = (reg) => {
    if(reg) {
        dispatch(setSelectValue(reg.value));
    } else {
        dispatch(setSelectValue(''))
    }
    
  };

  return [region, handleChange]
};
