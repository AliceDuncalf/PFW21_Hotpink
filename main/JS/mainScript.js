"use strict";


console.log("hej")
/*let data = {filtername, titel, id};
console.log(data);*/

//få fram namn och sorterar 
function getCountryNames (allCountries) {
    allCountries = COUNTRIES.map(obj => obj.name);
    allCountries.sort(); //sortera ordentligt
    return allCountries;
}
getCountryNames();

function getCityNames (allCitites) {
    allCitites = CITIES.map(obj => obj.name);
    allCitites.sort(); //sortera ordentligt
    return allCitites;
}
getCityNames();

function getUniversityNames (allUniversities) {
    allUniversities = UNIVERSITIES.map(obj => obj.name);
    allUniversities.sort(); //sortera ordentligt
    return allUniversities;
}
getUniversityNames();

function getProgramNames (allProgrammes) {
    allProgrammes = PROGRAMMES.map(obj => obj.name);
    allProgrammes.sort(); //sortera ordentligt
    return allProgrammes;
}
getProgramNames();

//filtrera ut stad utifrån land 

function filterOptions(cityID){
    let countryID = COUNTRIES.map(obj => obj.id);
    cityID = CITIES.map(obj => obj.countryID);

    if (cityID === countryID) {
        return cityID;
    }
    console.log(countryID);
    console.log(cityID);

}

filterOptions()

//lägger in namnen i select elementet (går kanske att göra smartare?)
function getContentToSelect(titel) {
    let selectCountries = document.getElementById("selectCountries");
    let selectCities = document.getElementById("selectCities");
    let selectUniversities = document.getElementById("selectUniversities");
    let selectProgrammes = document.getElementById("selectProgrammes");

    COUNTRIES.forEach(allCountries => {
        titel = allCountries.name;
        let selectOption = document.createElement("option");
        selectCountries.append(selectOption);
        selectOption.classList.add("countriesOptions")
        selectOption.innerHTML = `${titel}`
    })

    CITIES.forEach(allCitites => {
        titel = allCitites.name;
        let selectOption = document.createElement("option");
        selectCities.append(selectOption);
        selectOption.classList.add(``)
        selectOption.innerHTML = `${filterOptions()}`
    })

    UNIVERSITIES.forEach(allUniversities => {
        titel = allUniversities.name;
        let selectOption = document.createElement("option");
        selectUniversities.append(selectOption);
        selectOption.classList.add("universitiesOptions")
        selectOption.innerHTML = `${titel}`
    })

    PROGRAMMES.forEach(allProgrammes => {
        titel = allProgrammes.name;
        let selectOption = document.createElement("option");
        selectProgrammes.append(selectOption);
        selectOption.classList.add("programmesOptions")
        selectOption.innerHTML = `${titel}`
    })
}

getContentToSelect();












function countryContent() {
    let countryWrapper = document.createElement("div");
    document.querySelector("main").append(countryWrapper);
    document.querySelector(".countriesOptions").addEventListener("click", ()=> {
        countryWrapper.innerHTML = `<h1>${selectOption.titel}</h1>`
    })
    

}

countryContent();
