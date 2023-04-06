import { clearControls } from './controlsSlice';
import { useAppDispatch } from 'features/store';

export const useClearUp = () => {
    const dispatch = useAppDispatch();

    const clearUp = () => {
        dispatch(clearControls())
    };

    return clearUp;
};