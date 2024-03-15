//step-1
const loadCountries = async ()=>{
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountries(data);
}

// step-2 : 2nd line e console log porjonto
const displayCountries = countries =>{
    // console.log(countries);

    // step-4
    const CountriesHTML = countries.map(country=> getCountryHTML(country));
    console.log(CountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join(' ');
}

// step-3:
const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountries();