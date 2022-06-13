export const getCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await response.json()
}