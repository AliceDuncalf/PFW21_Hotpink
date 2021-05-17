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

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
selectCountries.innerHTML = `<option>VÄLJ LAND</option>`;

function sortNames(programmeNames){
    programmeNames.sort(function(a,b) {
<<<<<<< Updated upstream
=======
=======
/*programmeNames.sort(function(a,b) {
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    if (a.name.toLowerCase() < b.name.toLowerCase()
      ) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()
      ) return 1;
    return 0;
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  })
  return programmeNames
}



function contentCountry(titel, element ="", flag, img, info, visa) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}<img class="flag" src="filer/Images/${flag}" alt="Flag"></h3>
                        <img src="filer/Images/${img}" alt="country">
                        <div>${info}</div>
                        <div>Visa: ${visa}</div>
                        <div class="countryLanguageWrapper"></div>`;
    
    document.getElementById(`resultsCountry`).append(content);
    return titel, element, flag, img, info, visa;
}

function contentCity(titel, element ="", img, info, sunDays) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}
                            <div>Soldagar: ${sunDays}</div>
                        </h3>
                        <img src="filer/Images/${img}" alt="city">
                        <div>${info}</div>
                        <div id="commentsCityWrapper"></div> `;
    
    document.getElementById(`resultsCity`).append(content);
    return titel, element, img, info, sunDays;
}

function contentUniversity(titel, element ="") {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}</h3>`;
    
    document.getElementById(`resultsUniversity`).append(content);

    return titel, element;
}

function contentProgram(titel, element ="", entrygrades, exchangeSt, level, localSt, sucessRate) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<h3>${titel}</h3>
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
<<<<<<< Updated upstream
=======
=======
  }); */

function get_Country(countryid) {
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    let country = {};
    country.cities = getCities(countryid);
    return country;
}
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
=======
console.log(get_Country(0));
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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
console.log(getCities(1));

function getUniversities(cityid) {
    let universities = [];
    UNIVERSITIES.forEach(university => {
        if(university.cityID == cityid) {
            universities.push(university)
        }
    })
    return universities;
}

function getProgrammes(universityid){
    let programmes = [];
    PROGRAMMES.forEach(program => {
        if(program.universityID == universityid) {
            programmes.push(program);
        }
    })
    return programmes;
}
console.log(getProgrammes(1))

//let data = {COUNTRIES, CITIES, UNIVERSITIES, PROGRAMMES};

function selection(country) {
    country = [];
    COUNTRIES.forEach(countries => {
        let option = document.createElement("OPTION");
        selectCountries.append(option);
        option.innerHTML =`${countries.name}`;
        country.push(countries);

        selectCountries.addEventListener("change",(e) => {
            if (countries.name == e.target.value) {
                document.getElementById("results").innerHTML ="";
                contentCreator(countries.name, countries.imagesNormal, countries.text);
                console.log(countries);   
                selectCities.append(getCities(countries.id));
            }
        })
    })

    return country;
}
//console.log(get_Country(1));




// funktion med landets namn och id
/*function getCountries() {
    //Delar upp land och skapar options för varje, lägger till ett klick-event på valt land-id
    COUNTRIES.forEach(country => { 
        let countryname = country.name;
        let countryOption = document.createElement("OPTION")
        selectCountries.append(countryOption);
        countryOption.innerHTML = `${countryname}
                                    `;
     
            countryOption.addEventListener("change", () => {
            document.getElementById("results").innerHTML ="";
            let countryFilter = COUNTRIES.filter(obj => obj.name == countryname);  
            let chosenCountryID = countryFilter.map(obj => obj.id); 
            console.log(chosenCountryID);
            
            //skapar divar för de landet som är valt med all infomartion
            let countryContent = document.createElement("div");
            countryContent.classList.add("contentWrapper");
            document.getElementById("results").append(countryContent);
            countryContent.innerHTML = `<h3>${countryOption.value}</h3>
                                          
                                        <img src ="filer/Images/${country.imagesNormal[0]}">
                                        <div>${country.text}</div>
                                        <div>VISA:${country.visa}</div>
                                        `; //fixa så flagga allt läggs till här (flagga pch språk), ändra visa värdet?
            

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
=======
            //I det klick-eventet kommer de städer upp som matchar med de landet som är valt
            CITIES.forEach(city => {
                if(chosenCountryID == city.countryID) {
                    let cityName = city.name;
                    let cityOption = document.createElement("OPTION");
                    selectCities.append(cityOption);
                    cityOption.innerHTML = `${cityName}
                                            `;                        
                //skapar ett klick-event där vald stad får all info    
                cityOption.addEventListener("click", () => {
                    let cityContent = document.createElement("div");
                    document.getElementById("results").append(cityContent);
                    cityContent.classList.add("contentWrapper");
                    cityContent.innerHTML = `<h3>${city.name}</h3>
                                            <div>${city.sun}</div>
                                            <img src ="filer/Images/${city.imagesNormal[1]}">
                                            <div>${city.text}</div>
                                            <div>KOMMENTARER</div>`
                    
                    //när stad är vald så kommer universitet som matchar stadens id                        
                    UNIVERSITIES.forEach(uni => {
                        if(city.id == uni.cityID) {
                            let uniName = uni.name;
                            let uniOption = document.createElement("OPTION");
                            selectUniversities.append(uniOption);
                            uniOption.innerHTML = `${uniName}`;
                            
                            //skapar ett klick-event där vald universitet får all info
                            uniOption.addEventListener("click", () => {
                                let uniContent = document.createElement("div");
                                document.getElementById("results").append(uniContent);
                                uniContent.classList.add("contentWrapper");
                                uniContent.innerHTML = `<h3>${uni.name}</h3>
                                                        <div>KLUBBAR</div>
                                                        <div></div>`;

                                //när universitet är vald så kommer program som matchar universitetets id    
                                PROGRAMMES.forEach(program => {
                                    if(uni.id == program.universityID) {
                                        let programName = program.name;
                                        let programOption = document.createElement("OPTION");
                                        selectProgrammes.append(programOption);
                                        programOption.innerHTML = `${programName}`;
                                        
                                        //klick-event som skapar div med info om programmet som är valt
                                        programOption.addEventListener("click", () => {
                                            let programContent = document.createElement("div");
                                            document.getElementById("results").append(programContent);
                                            programContent.classList.add("contentWrapper");

                                            /*COMMENTS_PROGRAMME.forEach(program => {
                                                programAlias = program.alias;
                                                programText = program.text;

                                            })*/
                                            /*programContent.innerHTML = `<h3>${program.name}</h3>
                                                        <div>ENTRY GRADES: ${program.entryGrades}</div>
                                                        <div>SUCESS RATE: ${program.successRate}</div>
                                                        <div>PROGRAM LEVEL: ${program.level}</div>
                                                        <div>EXCHANGE STUDENTS: ${program.exchangeStudents}</div>
                                                        <div>LOCAL STUDENTS: ${program.localStudents}</div>
                                                        <div>KOMMENTARER</div>`;


                                        })
                                    }
                                })
                            })
                        }
                    })
                })
            } 
            })           
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            
        })
    })
    return universities;
<<<<<<< Updated upstream
}

function getProgrammes(universityid){
    sortNames(PROGRAMMES);
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
                contentProgram(program.name, "program", program.entryGrades, program.exchangeStudents, program.level, program.localStudents, program.successRate);
                getLanguage(program.language, "program");
                getCommentsforProgram(program.id);
            }
        })
    })
    return programmes;
}

=======
}

function getProgrammes(universityid){
    sortNames(PROGRAMMES);
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
                contentProgram(program.name, "program", program.entryGrades, program.exchangeStudents, program.level, program.localStudents, program.successRate);
                getLanguage(program.language, "program");
                getCommentsforProgram(program.id);
            }
        })
    })
    return programmes;
}

<<<<<<< Updated upstream

//hämta klubbar med medlemmar till universitet
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
getClubsforUniversity(); //får inte ut de i olika divar


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
>>>>>>> Stashed changes

//hämta klubbar med medlemmar till universitet
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
getClubsforUniversity(); //får inte ut de i olika divar


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


function visaResult(result) {
    result = COUNTRIES.forEach(country => {
        if(country.visa == true) {
            return "Ja"
        } else {
            return "Nej"
        }
    })
    return result;
}
console.log(visaResult(1));

//if visa == true return JA else return NEJ

//fixa entrygrades och successrate

//level - 1 Bachelor etc? 

<<<<<<< Updated upstream
=======
function visaResult(result) {
    result = COUNTRIES.forEach(country => {
        if(country.visa == true) {
            return "Ja"
        } else {
            return "Nej"
        }
    })
    return result;
}
console.log(visaResult(1));

//if visa == true return JA else return NEJ

//fixa entrygrades och successrate

//level - 1 Bachelor etc? 
=======
getCountries();
*/
>>>>>>> Stashed changes

>>>>>>> Stashed changes
