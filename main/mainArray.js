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


function getCities(countryid){
    let cities = [];
     CITIES.forEach(city => {
        if(city.countryID == countryid) {
            cities.push(city);
        }
    })
    return cities;
}

function get_Country(countryid) {
    let country = {};
    country.cities = getCities(countryid);
    return country;
}
//console.log(get_Country(1));




// funktion med landets namn och id
function getCountries() {
    //Delar upp land och skapar options för varje, lägger till ett klick-event på valt land-id
    COUNTRIES.forEach(country => { 
        let countryname = country.name;
        let countryOption = document.createElement("OPTION")
        selectCountries.append(countryOption);
        countryOption.innerHTML = `${countryname}
                                    `;
     
            countryOption.addEventListener("click", (clicked) => {
            console.log(clicked);
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
            if(clicked === true) {
                console.log("hej");
            }

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
                                            programContent.innerHTML = `<h3>${program.name}</h3>
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
            
        })
    })
 
}

getCountries();


   