"use strict";

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



function contentCountry(titel, element ="", flag, img, info, visa) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div id="name">
                            <h3>${titel}</h3><img class="flag" src="filer/Images/${flag}" alt="Flag">
                        </div>
                        <img src="filer/Images/${img}" alt="country">
                        <div>${info}</div>
                        <div id="hej">
                            <div>Visa: ${visa}</div>
                            <div class="countryLanguageWrapper"></div>
                        </div>`;
    
    document.getElementById(`resultsCountry`).append(content);
    return titel, element, flag, img, info, visa;
}

function contentCity(titel, element ="", img, info, sunDays) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div id="name">
                            <h3>${titel}
                                <div>Soldagar: ${sunDays}</div>
                            </h3>
                        </div>    
                        <img src="filer/Images/${img}" alt="city">
                        <div>${info}</div>
                        <div id="commentsCityWrapper"></div> `;
    
    document.getElementById(`resultsCity`).append(content);
    return titel, element, img, info, sunDays;
}

function contentUniversity(titel, element ="") {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div id="name">
                            <h3>${titel}</h3>
                        </div>`;
    
    document.getElementById(`resultsUniversity`).append(content);

    return titel, element;
}

function contentProgram(titel, element ="", entrygrades, exchangeSt, level, localSt, sucessRate) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div id="name">
                            <h3>${titel}</h3>
                        </div>
                        <div class="programLanguageWrapper"></div>
                        <div>Entry grades: ${entrygrades}</div>
                        <div>Sucess rate: ${sucessRate}</div>
                        <div>Exchange students: ${exchangeSt}</div>
                        <div>Local students: ${localSt}</div>
                        <div>Level: ${level}</div>
                        <div id="commentsProgramWrapper"></div>`;
    
    document.getElementById(`resultsProgram`).append(content);
    return titel, element, entrygrades, exchangeSt, level, localSt, sucessRate;
}


function getCountry(countryid) {
    let country = {};
    country.cities = getCities(countryid);
    return country;
}

function selectionCountry(countries) {
    sortNames(COUNTRIES);
    countries = [];
    COUNTRIES.forEach(country => {
        let option = document.createElement("OPTION");
        selectCountries.append(option);
        option.textContent =`${country.name}`;
        countries.push(country);

        selectCountries.addEventListener("change",(e) => {
            if (country.name == e.target.value) {
                document.getElementById("resultsCountry").innerHTML ="";
                document.getElementById("resultsCity").innerHTML ="";
                document.getElementById("resultsUniversity").innerHTML ="";
                document.getElementById("resultsProgram").innerHTML ="";

                contentCountry(country.name, "country", country.flag, country.imagesNormal[0], country.text, country.visa);
                getLanguage(country.languageID, "country");
                //selectCities.textContent ="";  
                selectCities.append(getCities(country.id));
            }
        })
    })
    return countries;
}
selectionCountry();


function getCities(countryid){
    sortNames(CITIES);
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
                document.getElementById("resultsUniversity").innerHTML ="";
                document.getElementById("resultsProgram").innerHTML ="";
   
                contentCity(city.name, "city", city.imagesNormal[0], city.text, city.sun);

                getCommentsforCity(city.id);
                selectUniversities.innerHTML ="";  
                selectUniversities.append(getUniversities(city.id));
            }
        })
    })
    return cities;
}


function getUniversities(cityid) {
    sortNames(UNIVERSITIES);
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
                document.getElementById("resultsProgram").innerHTML ="";
                contentUniversity(university.name, "university");
                getClubsforUniversity(university.id);
                selectProgrammes.innerHTML ="";  
                selectProgrammes.append(getProgrammes(university.id));
            }
        })
    })
    return universities;
}

function getProgrammes(universityid){
    sortNames(PROGRAMMES);
    selectProgrammes.innerHTML = `<option>VÄLJ PROGRAM</option>`;
    let programmes = [];
    PROGRAMMES.forEach(program => {
        if(program.universityID == universityid) {
            programmes.push(program)
            let option = document.createElement("OPTION");
            selectProgrammes.append(option);
            option.innerHTML =`${program.name}`;
            console.log(programmes);
        }
        selectProgrammes.addEventListener("change", (e)=> {
            if(program.name == e.target.value) {
                document.getElementById("resultsProgram").innerHTML ="";
                selectProgrammes.innerHTML ="";  
                selectProgrammes.append(getProgrammes(program.id));
                contentProgram(program.name, "program", program.entryGrades, program.exchangeStudents, program.level, program.localStudents, program.successRate);
                getLanguage(program.language, "program");
                getCommentsforProgram(program.id);
            }
        })
    })
    /*document.querySelector(".Master").addEventListener("click", () => {
        console.log("clicked");
        selectProgrammes.innerHTML="";
        let masterProgrammes = programmes.filter(obj => {
            if (obj.level == LEVELS.indexOf("Master")) {
                let option = document.createElement("OPTION");
                selectProgrammes.append(option);
                option.innerHTML =`${obj.name}`;
            }
        });
        return masterProgrammes;
    }); */
    return programmes;
}

function getClubsforUniversity(universityid){
    let universityClubs = CLUBS.forEach(club => {
        if(club.universityID == universityid) {
            let clubsWrapper = document.createElement("div");
            document.querySelector(".universityWrapper").append(clubsWrapper)
            clubsWrapper.innerHTML =`<div>${club.name}</div>
                                     <div>${club.memberCount}</div>`
        }
    })

    return universityClubs;
}

function getLanguage(id, type="") {
    let language = LANGUAGES.forEach(lang => {
        if(lang.id == id) {
            let languageContainer = document.createElement("div");
            document.querySelector(`.${type}LanguageWrapper`).append(languageContainer);
            languageContainer.innerHTML = `Språk: ${lang.name}`;
        }
    })
    return language;
}

function getCommentsforCity(cityid) {
    let cityComments = COMMENTS_CITY.forEach(comment => {
        if(comment.cityID == cityid) {
            let commentCityWrapper = document.createElement("div");
            document.getElementById("commentsCityWrapper").append(commentCityWrapper); 
            commentCityWrapper.innerHTML = `
                                        <div>${comment.alias}</div>
                                        <div>${comment.text}</div>
                                        `;
        }
    })
    return cityComments;
}

function getCommentsforProgram(programid) {
    let programComments = COMMENTS_PROGRAMME.forEach(comment => {
        if(comment.programmeID == programid) {
            let commentProgramWrapper = document.createElement("div");
            document.getElementById("commentsProgramWrapper").append(commentProgramWrapper);
            commentProgramWrapper.innerHTML =`<div>${comment.alias}</div>
                                              <div>${comment.text}</div>`

        }
    })
    return programComments;
}


/*function visaResult(result) {
    result = COUNTRIES.forEach(country => {
        if(country.visa == true) {
            return "Ja"
        } else {
            return "Nej"
        }
    })
    return result;
}
console.log(visaResult(1)); */

//if visa == true return JA else return NEJ

//fixa entrygrades och successrate

//level - 1 Bachelor etc? 