"use strict";

//globala variablar

//select element i HTML
let selectCountries = document.getElementById("selectCountries");
let selectCities = document.getElementById("selectCities");
let selectUniversities = document.getElementById("selectUniversities");
let selectProgrammes = document.getElementById("selectProgrammes");

selectCountries.innerHTML = `<option>Välj land</option>`;

function sortNames(programmeNames) {
    programmeNames.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()
        ) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()
        ) return 1;
        return 0;
    })
    return programmeNames
}

function contentCountry(titel, element ="", flag, img, info) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div class="name">
                            <h3>${titel}</h3><img class="flag" src="filer/Images/${flag}" alt="Flag">
                        </div>
                        <img src="filer/Images/${img}" alt="country">
                        <p class="description">${info}</p>
                        <div class="countryLanguageWrapper"></div>
                        `;
    
    document.getElementById(`resultsCountry`).append(content);
    return titel, element, flag, img, info;
}

function contentCity(titel, element = "", img, info, sunDays) {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div class="name">
                            <h3>${titel}</h3>
                            <p>Soldagar: ${sunDays}</p>
                        </div>    
                        <img src="filer/Images/${img}" alt="city">
                        <p class="description">${info}</p>
                        <p class="reviewTitle">Recensioner:</p>
                        <div id="commentsCityWrapper"></div> `;

    document.getElementById(`resultsCity`).append(content);
    return titel, element, img, info, sunDays;
}

function contentUniversity(titel, element = "") {
    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div class="name">
                            <h3>${titel}</h3>
                        </div>
                        `;

    document.getElementById(`resultsUniversity`).append(content);

    return titel, element;
}

function contentProgram(titel, element = "", exchangeSt, localSt, level, entrygrades, sucess) {

    let content = document.createElement("div");
    content.classList.add(`${element}Wrapper`);
    content.innerHTML =`<div class="name">
                            <h3>${titel}</h3>
                        </div>
                        <div class="programLanguageWrapper"></div>
                        <div class="programInfoBox">
                            <div>Utbytesstudenter: ${exchangeSt}</div>
                            <div>Studenter: ${localSt}</div>
                            <div>Nivå: ${level}</div>
                        </div> 
                        <div class="entryAndSucessWrapper">
                            <div id="programYear">År:</div>  
                            <div id="programYearContent">
                                <div>2016</div>
                                <div>2017</div> 
                                <div>2018</div> 
                                <div>2019</div> 
                                <div>2020</div>
                            </div>  
                            <div id="entryGrades">Behörighetskrav:</div>
                            <div id="entryGradesContent"></div>
                        
                            <div id="sucessRate">Sucess Rate:</div>
                            <div id="sucessRateContent"></div>
                        </div>    
                        <div id="commentsProgramWrapper"></div>`;

    document.getElementById(`resultsProgram`).append(content);
    sucess.forEach(rate => {
        let rates = document.createElement("div");
        document.getElementById("sucessRateContent").append(rates);
        rates.innerHTML = `${[rate]}%`;
    })
    entrygrades.forEach(grade => {
        let grades = document.createElement("div");
        document.getElementById("entryGradesContent").append(grades);
        grades.innerHTML = `${grade}`;
    })
    return titel, element, exchangeSt, localSt, level;
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
        option.textContent = `${country.name}`;
        countries.push(country);

        selectCountries.addEventListener("change", (e) => {
            if (country.name == e.target.value) {
                document.getElementById("resultsCountry").innerHTML = "";
                document.getElementById("resultsCity").innerHTML = "";
                document.getElementById("resultsUniversity").innerHTML = "";
                document.getElementById("resultsProgram").innerHTML = "";

                selectUniversities.innerHTML="";
                selectProgrammes.innerHTML="";

                contentCountry(country.name, "country", country.flag, country.imagesNormal[0], country.text, country.visa);
               
                getLanguage(country.languageID, "country");
                getVisa(country.id);
                selectCities.append(getCities(country.id));
               

            }
        })
    })
    return countries;
}
selectionCountry();

function getCities(countryid) {
    sortNames(CITIES);
    selectCities.innerHTML = `<option>Välj stad</option>`;
    let cities = [];
    CITIES.forEach(city => {
        if (city.countryID == countryid) {
            let option = document.createElement("OPTION");
            selectCities.append(option);
            option.textContent = `${city.name}`;
            cities.push(city);

        }
        selectCities.addEventListener("change", (e) => {
            if (city.name == e.target.value) {
                document.getElementById("resultsCity").innerHTML = "";
                console.log(e.target.value);
                document.getElementById("resultsUniversity").innerHTML = "";
                document.getElementById("resultsProgram").innerHTML = "";

                contentCity(city.name, "city", city.imagesNormal[0], city.text, city.sun);

                getCommentsforCity(city.id);
                document.getElementById("commentsCityWrapper").scrollTop = 0;
                selectUniversities.innerHTML = "";
                selectProgrammes.innerHTML = "";
                selectUniversities.append(getUniversities(city.id));
            }
        })
    })
    return cities;
}

function getUniversities(cityid) {
    sortNames(UNIVERSITIES);
    selectUniversities.innerHTML = `<option>Välj universitet</option>`;
    let universities = [];

    UNIVERSITIES.forEach(university => {
        if(university.cityID == cityid) { 
            let option = document.createElement("OPTION");
            selectUniversities.append(option);
            option.innerHTML = `${university.name}`;
            universities.push(university);
        }

        selectUniversities.addEventListener("change", (e) => {
            if (university.name == e.target.value) {
                document.getElementById("resultsUniversity").innerHTML = "";
                document.getElementById("resultsProgram").innerHTML = "";
                contentUniversity(university.name, "university");
                getClubsforUniversity(university.id);
                selectProgrammes.innerHTML = "";
                selectProgrammes.append(getProgrammes(university.id));
            }
        })
    })
    return universities;
}

function getProgrammes(universityid, programmes) {
    sortNames(PROGRAMMES);
    selectProgrammes.innerHTML = `<option>Välj program</option>`;
    programmes = [];
    
    PROGRAMMES.forEach(program => {
        if(program.universityID == universityid) {
            let option = document.createElement("OPTION");
            selectProgrammes.append(option);
            option.innerHTML = `${program.name}`;
            programmes.push(program);
        }

     
        programmes.forEach(program => {
            selectProgrammes.addEventListener("change", (e)=> {
                if(program.name == e.target.value) {
                    document.getElementById("resultsProgram").innerHTML ="";           
                    contentProgram(program.name, "program", program.exchangeStudents, program.localStudents, program.level, program.entryGrades, program.successRate);
                    getLanguage(program.language, "program");
                    getCommentsforProgram(program.id);
                    document.getElementById("commentsProgramWrapper").scrollTop = 0;
                }
            })
        })     
    })
 
    return programmes;
}

function getClubsforUniversity(universityid) {
    document.querySelector
    let clubsAndMembers = document.createElement("div");
    clubsAndMembers.innerHTML = `
        <div id="clubsAndMembers">
            <div>Klubbar</div>
            <div>Medlemmar</div>
        </div>
    `;
    document.querySelector(".universityWrapper").append(clubsAndMembers)
    let universityClubs = CLUBS.forEach(club => {
        if (club.universityID == universityid) {
            if(club.name == undefined) {
                return ;
            }
            let clubsWrapper = document.createElement("div");
            document.querySelector(".universityWrapper").append(clubsWrapper)
            clubsWrapper.innerHTML = `
                <div id="nameAndMembers">
                    <div>${club.name}</div>
                    <div>${club.memberCount}</div>
                </div>
            `;      
        }
    })

    return universityClubs;
}

function getLanguage(id, type = "") {
    let language = LANGUAGES.forEach(lang => {
        if (lang.id == id) {
            let languageContainer = document.createElement("div");
            document.querySelector(`.${type}LanguageWrapper`).append(languageContainer);
            languageContainer.innerHTML = `Språk: ${lang.name}`;
        }
    })
    return language;
}

function getCommentsforCity(cityid) {
    //sortNames(COMMENTS_CITY);
    let cityComments = COMMENTS_CITY.forEach(comment => {
        if (comment.cityID == cityid) {
            let commentCityWrapper = document.createElement("div");
            document.getElementById("commentsCityWrapper").append(commentCityWrapper);
            commentCityWrapper.innerHTML = `
                                        <div class="reviewTop">
                                            <div class="reviewName">${comment.alias}</div>
                                            <div>${comment.date["year"]}/${comment.date["month"]}/${comment.date["day"]}</div>
                                        </div>    
                                        <p class="commentsText">${comment.text}</p>
                                        <div id="starsCityWrapper">
                                            <div class="rating">Betyg:</div>
                                            <div class="ratingFigures">Uteliv: <span>${comment.stars["out"]}/5</span>
                                            Mat: <span>${comment.stars["food"]}/5</span>
                                            Boende: <span>${comment.stars["accomodation"]}/5</span></div>
                                        </div>`;
        }
       
    })
    return cityComments;
}

function getCommentsforProgram(programid) {
    let programComments = COMMENTS_PROGRAMME.forEach(comment => {
        if (comment.programmeID == programid) {            
            let commentProgramWrapper = document.createElement("div");
            document.getElementById("commentsProgramWrapper").append(commentProgramWrapper);
            commentProgramWrapper.innerHTML =`<div class="reviewTop">
                                                <div class="reviewName">${comment.alias}</div>
                                                <div>${comment.date["year"]}/${comment.date["month"]}/${comment.date["day"]}</div>
                                            </div>   
                                              <p class="commentsText">${comment.text}</p>
                                            
                                              <div id="starsProgramWrapper">
                                                  <div class="rating">Betyg:</div>
                                                  <div class="ratingFigures">Lärare: <span>${comment.stars["teachers"]}/5</span>
                                                  Studenter: <span>${comment.stars["students"]}/5</span>
                                                  Kurser: <span>${comment.stars["courses"]}/5 </span></div>
                                              </div>`;

        }
    })
    return programComments;
}

function getVisa(countryVisa){
    countryVisa = COUNTRIES.find(obj => obj.id == countryVisa).visa;
    let visaContainer = document.createElement("div");
    document.querySelector(".countryLanguageWrapper").append(visaContainer);
    
    if (countryVisa == true) {
        visaContainer.innerHTML ="Visum: Ja";
    } else {
        visaContainer.innerHTML="Visum: Nej";
    }
    return countryVisa;
}



