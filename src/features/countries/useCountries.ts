import { RootState, useAppDispatch } from '../store';
import { useEffect } from 'react';
import { fetchingCountries } from './countriesSlice';
import { useSelector } from 'react-redux';
import { selectCountriesInfo, selectSearchedCountries } from './countriesSelectors';
import { selectorControls } from '../controls/ControlsSelectors';
import { Country } from 'types';

export default function useCountries(): [
    Country[],
    ReturnType<typeof selectCountriesInfo>
] {
    const dispatch = useAppDispatch();
    const { searchValue, regionValue } = useSelector(selectorControls);
    const countries = useSelector((state: RootState) => selectSearchedCountries(state, { searchValue, regionValue }));
    const { status, errors, qnt } = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qnt) {
            dispatch(fetchingCountries());
        }
      }, [qnt, dispatch]);

    return [countries, {status, errors, qnt}]
}
