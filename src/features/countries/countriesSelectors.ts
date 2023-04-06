import { RootState } from './../store';

export const selectCountriesInfo = (state: RootState) => ({
    status: state.countries.status,
    errors: state.countries.errors,
    qnt: state.countries.list.length
});

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectSearchedCountries = (state: RootState, {searchValue = '', regionValue = ''} ) => {
    return state.countries.list.filter(country => 
        {return ((country.region.includes(regionValue)) && ((country.name.toLowerCase().includes(searchValue.toLowerCase())) || 
           ( country.capital?.toLowerCase().includes(searchValue.toLowerCase())))
        )
    }
    );
    
};