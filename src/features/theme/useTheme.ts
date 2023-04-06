import { useSelector, TypedUseSelectorHook} from 'react-redux';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { changeTheme } from './themeSlice';
import { AppDispatch, RootState } from 'features/store';

export const useTheme = () => { 
    const dispatch = useDispatch<AppDispatch>();
    const AppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const theme = AppSelector(state => state.theme);
    const setTheme = () => dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
      }, [theme]);

    return {theme, setTheme}
};