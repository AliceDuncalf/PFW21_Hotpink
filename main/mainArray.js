"use strict";

//få ut bild och info till land (språk, visa)
//inte kunna klicka på ett ämne och få en till div utan tömma och lägga ny
//få ut kommentarer till stad och program
//sortera stad/uni/program i bokstavsordning 
//kolla över namn på variablar så att allt är tydligt



//globala variablar

//select element i HTML
let selectCountries = document.getElementById("selectCountries"); //borde dessa vara globala variablar? 
let selectCities = document.getElementById("selectCities");
let selectUniversities = document.getElementById("selectUniversities");
let selectProgrammes = document.getElementById("selectProgrammes");

selectCountries.innerHTML = `<option>VÄLJ LAND</option>`;

function sortNames(programmeNames){
    programmeNames.sort(function(a,b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()
      ) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()
      ) return 1;
    return 0;
  })
  return programmeNames
}



function contentCountry(titel, element ="", flag, img, info, visa, lang) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}<img class="flag" src="filer/Images/${flag}" alt="Flag"></h3>
                        <img src="filer/Images/${img}" alt="country">
                        <div>${info}</div>
                        <div>Visa: ${visa}</div>
                        <div>Språk: ${lang}</div>`;
    
    document.getElementById(`resultsCountry`).append(content);
    return titel, element, flag, img, info, visa, lang;
}

function contentCity(titel, element ="", img, info) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}</h3>
                        <img src="filer/Images/${img}" alt="city">
                        <div>${info}</div>
                        <div>KOMMENTARER</div>`;
    
    document.getElementById(`resultsCity`).append(content);
    return titel, element, img, info;
}

function contentUniversity(titel, element ="") {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}</h3>
                        `;
    
    document.getElementById(`resultsUniversity`).append(content, getClubsforUniversity());

    return titel, element, getClubsforUniversity(club);
}

function contentProgram(titel, element ="", entrygrades, exchangeSt, lang, level, localSt, sucessRate) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}</h3>
                        <div>Entry grades: ${entrygrades}</div>
                        <div>Sucess rate: ${sucessRate}</div>
                        <div>Exchange students: ${exchangeSt}</div>
                        <div>Local students: ${localSt}</div>
                        <div>Level: ${level}</div>
                        <div>Language: ${lang}</div>
                        <div>KOMMENTARER</div>`;
    
    document.getElementById(`resultsProgram`).append(content);
    return titel, element, entrygrades, exchangeSt, lang, level, localSt, sucessRate;
}


function getCountry(countryid) {
    let country = {};
    country.cities = getCities(countryid);
    return country;
}

function selectionCountry(countries) {
    countries = [];
    COUNTRIES.forEach(country => {
        let option = document.createElement("OPTION");
        selectCountries.append(option);
        option.textContent =`${country.name}`;
        countries.push(country);

        selectCountries.addEventListener("change",(e) => {
            if (country.name == e.target.value) {
                document.getElementById("resultsCountry").innerHTML ="";
                //splice
                contentCountry(country.name, "country", country.flag, country.imagesNormal[0], country.text, country.visa, getLanguage(country.languageID));
                console.log(countries); 
                //selectCities.textContent ="";  
                selectCities.append(getCities(country.id));
            }
        })
    })
    sortNames(countries); //funkar inte
    return countries;
}
selectionCountry();


function getCities(countryid){
    selectCities.innerHTML = `<option>VÄLJ STAD</option>`;
    let cities = [];
     CITIES.forEach(city => {
        if(city.countryID == countryid) {
            let option = document.createElement("OPTION");
            selectCities.append(option);
            option.textContent =`${city.name}`;
            cities.push(city);
        
        }
        selectCities.addEventListener("change",(e) => {
            if(city.name == e.target.value) {
                document.getElementById("resultsCity").innerHTML ="";
                console.log(e.target.value);
                contentCity(city.name, "city", city.imagesNormal[0], city.text);
                selectUniversities.innerHTML ="";  
                selectUniversities.append(getUniversities(city.id));
            }
        })
    })
    return cities;
}


function getUniversities(cityid) {
    selectUniversities.innerHTML = `<option>VÄLJ UNIVERSITET</option>`;
    let universities = [];
    UNIVERSITIES.forEach(university => {
        if(university.cityID == cityid) {
            universities.push(university)
            let option = document.createElement("OPTION");
            selectUniversities.append(option);
            option.innerHTML =`${university.name}`;
            universities.push(university);
        }
        selectUniversities.addEventListener("change", (e)=> {
            if(university.name == e.target.value) {
                document.getElementById("resultsUniversity").innerHTML ="";
                contentUniversity(university.name, "university", getClubsforUniversity(university.id));
                selectProgrammes.innerHTML ="";  
                selectProgrammes.append(getProgrammes(university.id));
            }
            
        })
    })
    return universities;
}

function getProgrammes(universityid){
    selectProgrammes.innerHTML = `<option>VÄLJ PROGRAM</option>`;
    let programmes = [];
    PROGRAMMES.forEach(program => {
        if(program.universityID == universityid) {
            programmes.push(program);
            let option = document.createElement("OPTION");
            selectProgrammes.append(option);
            option.innerHTML =`${program.name}`;
            programmes.push(program);
        }
        selectProgrammes.addEventListener("change", (e)=> {
            if(program.name == e.target.value) {
                document.getElementById("resultsProgram").innerHTML ="";
                selectProgrammes.innerHTML ="";  
                selectProgrammes.append(getProgrammes(program.id));
                contentProgram(program.name, "program", program.entryGrades, program.successRate, program.exchangeStudents, program.localStudents, program.level, program.language);
            }
        })
    })
    return programmes;
}


//hämta klubbar med medlemmar till universitet
function getClubsforUniversity(universityid){
    let universityClubs = [];
    let universityMembers = [];
    CLUBS.forEach(club => {
        if(club.universityID == universityid) {
            let clubDiv = document.createElement("div");
            universityClubs.push(club.name);
            universityMembers.push(club.memberCount);
            clubDiv.append(universityMembers, universityClubs);
            console.log(clubDiv)
        }
    })

    return universityClubs, universityMembers;
}
getClubsforUniversity(); //får inte ut de i olika divar


function getLanguage(countryid) {
    let langCountry = [];
    LANGUAGES.forEach(lang => {
        if(lang.id == countryid) {
            langCountry.push(lang.name);
        }
    })
    return langCountry;
}

//hämta kommentarer till stad

//hämta kommentarer till land

//koppla språk till land och program

//if visa == true return JA else return NEJ