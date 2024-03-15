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

//option 1
// const getCountryHTML = country => {
//      const {name, flags} = country;
     //here country is the object and name and flags are two variable that contains in country object. 
    // if we declare variable and object like this, then we don't have to use {country.name.common} instead of this we can only use {name.common};

//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option-2
const getCountryHTML = ({name, flags, area})=>{
    return `
        <div class="country">
            <h2>
                ${name.common}
            </h2>
            <p>Area : ${area}</p>
            <img src="${flags.png}">
        </div>
    `
}

// original
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

loadCountries();