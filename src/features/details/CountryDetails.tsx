import { Info } from "./Info";
import { useSelector } from "react-redux";
import { selectCountryInfo } from "./detailsSelectors";
import useDetails from "./useDetails";
import { NavigateFunction } from "react-router-dom";

interface CountryDetailsProps {
  name: string,
  navigate: NavigateFunction
}

export default function CountryDetails({ name, navigate }: CountryDetailsProps) {
  const { status, errors, country } = useSelector(selectCountryInfo);
  useDetails(name);

  return (
    <>
      {errors && <div>{errors}</div>}
      {status === "loading" && <div>Loading...</div>}

      {country && <Info push={navigate} {...country} />}
    </>
  );
}
