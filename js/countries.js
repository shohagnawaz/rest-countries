const loadCounters = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = (countries) => {
    //console.log(countries)
    const allCountries = countries.map(country => getCountry(country));
    //console.log(allCountries)
    const container = document.getElementById("countries");
    container.innerHTML = allCountries.join(" ");
}

const getCountry = (country) => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCounters();