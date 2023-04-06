import { RootState } from './../store';
export const selectorSearchValue = (state: RootState) => state.controls.searchValue;
export const selectorSelectValue = (state: RootState) => state.controls.regionValue;
export const selectorControls = (state: RootState) => state.controls;