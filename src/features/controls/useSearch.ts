import { useSelector } from 'react-redux';
import { selectorSearchValue } from './ControlsSelectors';
import { setSearchValue } from './controlsSlice';
import { useAppDispatch } from 'features/store';
import { ChangeEventHandler } from 'react';

type onSearch = ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, onSearch] => {

    const dispatch = useAppDispatch();
    const value = useSelector(selectorSearchValue);

    const handleChange: onSearch = (e) => {
        dispatch(setSearchValue(e.target.value))
    };

    return [value, handleChange];
};