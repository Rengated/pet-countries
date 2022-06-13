export const getCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all", {
        method: 'GET',
    });
    return await response.json()
}

export const getFilteredCountriesByRegionBlock = async (region) => {

    const response = await fetch(`https://restcountries.com/v2/regionalbloc/${region}`, {
        method: 'GET', 
    });
    return await response.json()
}


export const getCountriByName = async (name) => {

    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
        method: 'GET',
    });
    return await response.json()
}