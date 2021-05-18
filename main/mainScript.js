"use strict";

function DOMcategoryDiv() {
  let categoryDiv = document.createElement("div");
  let programBox = document.createElement("div");
  programBox.classList.add("programbox");
  categoryDiv.classList.add("categories");
  document.querySelector("#HittaProgram").append(categoryDiv);
  document.querySelector("#HittaProgram").append(programBox);

  let categoryName = FIELDS.map(obj => obj);
  //console.log(categoryName);
  categoryName.forEach(category => {

    let div = document.createElement("div");
    div.classList.add("categoryBox")
    document.querySelector(".categories").append(div);
    div.innerHTML = `<input type="checkbox" id="${category.name}"></input><div>${category.name}</div`

    div.querySelector(`#${category.name}`).addEventListener("click", () => {

      if (programBox.innerHTML !== "") {
        clearAll(); 
      } 

      let FilterArray = PROGRAMMES.filter(programme => programme.subjectID === category.id);
      FilterArray.filter(obj => obj.name);
      console.log(FilterArray);
      FilterArray.forEach(program => {
        let programmeContentDiv = document.createElement("div");
        programmeContentDiv.classList.add("programmeContentDiv")
        programmeContentDiv.innerHTML = `
              <div id="programmeName">${program.name}</div>
              <div id="programmeInfo">
                <div id="university">${GetUniversityNameFromProgramme(program.universityID)}</div>
                <div id="country">${getCountryFromUniverityID(program.universityID)}</div>
                <div id="city">${GetCityFromUniverityID(program.universityID)}</div>
              </div>
            `;
        document.querySelector(".programbox").append(programmeContentDiv);
      });
      
    });


  });
};
DOMcategoryDiv();



//Hittar namnet på de univesitet som programmet är på
function GetUniversityNameFromProgramme(id) {
  let UniversityObject = UNIVERSITIES.find(univerity => univerity.id === id);
  return UniversityObject.name;
};

//Hittar namnet på den STADEN som universitet ligger i
function GetCityFromUniverityID(id) {
  let cityID = UNIVERSITIES.find(uni => uni.id === id).cityID;
  let cityName = CITIES.find(city => city.id === cityID).name
  return cityName;
};
//console.log(GetCityFromUniverityID(10));

function getCountryFromUniverityID(id) {
  let cityID = UNIVERSITIES.find(uni => uni.id === id).cityID; //cityID 0
  let countryID = CITIES.find(city => city.id === cityID).countryID // countryID 0
  let countryName = COUNTRIES.find(country => country.id === countryID).name
  return countryName
}
//console.log(getCountryFromUniverityID(10));

//Nollställa programmen
function clearAll() {
  document.querySelector(".programbox").innerHTML = "";
};


function createLevelOptions(){
    LEVELS.forEach(level => {
        let checkbox = document.createElement("INPUT")
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", `${level}`);
        checkbox.classList.add(`${level}`)
        let div = document.createElement("DIV")
        document.querySelector("#levelsDiv").append(checkbox, div);
        div.innerHTML = `${level}
        `;
    }); 
}; 
createLevelOptions();

/*
function GetBachelorProgrammes() {
    document.querySelector(".Bachelor").addEventListener("click", () => {
        console.log("clicked");
        let BachelorProgrammes = [];
        PROGRAMMES.forEach(program => {
            if (program.level == LEVELS.indexOf("Bachelor")) {
            BachelorProgrammes.push(program.name)
        }
    });
    console.log(BachelorProgrammes);
    return BachelorProgrammes;
    });
};

/*function GetMasterProgrammes() {
    document.querySelector(".Master").addEventListener("click", () => {
        console.log("clicked");
        let MasterProgrammes = [];
        PROGRAMMES.forEach(program => {
            if (program.level == LEVELS.indexOf("Master")) {
            MasterProgrammes.push(program.name)
            }
        });
        console.log(MasterProgrammes);
        return MasterProgrammes;
    });
}

GetBachelorProgrammes();


GetMasterProgrammes(); */


// PROGRAMMES.forEach(program => {
//     if (program.level == LEVELS.indexOf("Master")) {
//     console.log("hej"); 
// }
// });




