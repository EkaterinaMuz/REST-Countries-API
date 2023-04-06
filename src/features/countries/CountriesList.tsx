import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { CountryInfo } from 'types';
import useCountries from './useCountries';

export default function CountriesList() {
    const navigate = useNavigate();
    const [countries, { status, errors }] = useCountries();

    return (
        <>
            {errors && <div>{errors}</div>}
            {status === 'loading' && <div>Loading...</div>}
            {status === 'received' && (

                <List>
                    {countries.length === 0 && <div>Nothing found</div>}

                    {countries.map((c) => {
                        const countryInfo: CountryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    )
}
