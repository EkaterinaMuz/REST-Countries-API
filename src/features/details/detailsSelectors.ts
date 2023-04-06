import { RootState } from '../store';
export const selectCountryInfo = (state: RootState) => state.country;
export const selectNeighbours = (state: RootState) => state.country.neighbours;