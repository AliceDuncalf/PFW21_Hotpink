"use strict";

function categoriesAndProgrammes() {
  let categoryDiv = document.createElement("div");
  let programBox = document.createElement("div");
  programBox.classList.add("programbox");
  categoryDiv.classList.add("categories");
  document.querySelector("#HittaProgram").append(categoryDiv);
  document.querySelector("#HittaProgram").append(programBox);

  FIELDS.forEach(category => {

    let categoryBox = document.createElement("div");
    categoryBox.classList.add("categoryBox")
    document.querySelector(".categories").append(categoryBox);
    categoryBox.innerHTML = `<input type="checkbox" value="${category.name}" class="categoryname" id="${category.name}"><label for="${category.name}">${category.name}</label></input>`;

    categoryBox.querySelector(`#${category.name}`).addEventListener("click", () => {
      document.querySelector(".programbox").classList.add("scroll");
      document.querySelectorAll(".categoryname").forEach(knapp => {
        knapp.checked = false
      });

      categoryBox.querySelector(`#${category.name}`).checked = true
      if (programBox.innerHTML !== "") {
        document.querySelector(".programbox").innerHTML = "";
        programBox.scrollTop =0;
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
          <div id="city">${GetCityFromUniverityID(program.universityID)}</div>
          <div id="FlagAndCountry">
            <div id="country">${getCountryFromUniverityID(program.universityID)}</div><img class="countryFlag" src="filer/Images/${getCountryFlagFromUniverityID(program.universityID)}">
          </div>
        </div>
      `;
        document.querySelector(".programbox").append(programmeContentDiv);
      });
    });
  });
};
categoriesAndProgrammes();


//Hittar namnet på de univesitet som programmet är på
function GetUniversityNameFromProgramme(id) {
  let UniversityObject = UNIVERSITIES.find(university => university.id === id);
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

//tar fram flagga till vaje land
function getCountryFlagFromUniverityID(id) {
  let cityID = UNIVERSITIES.find(uni => uni.id === id).cityID; //cityID 0
  let countryID = CITIES.find(city => city.id === cityID).countryID // countryID 0
  let countryFlag = COUNTRIES.find(country => country.id === countryID).flag
  return countryFlag
}

//Nollställa programmen
function clearAll() {
  document.querySelector(".programbox").innerHTML = "";
};


function createLevelOptions(checkbox){

  LEVELS.forEach(level => {
   
    checkbox = document.createElement("div")
    
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", `${level}`)
    checkbox.classList.add(`checkbox`);
    //checkbox.classList.add(`${level}`);

    checkbox.innerHTML = `<input type="checkbox" value="${level}" class="checkboxes" name="checkbutton" id="${level}"><label for="${level}">${level}</label></input>`;
    
    //let levelNameTag = document.createElement("DIV");
    //levelNameTag.innerHTML = `${level}`; 
    document.querySelector("#levelsDiv").append(checkbox);
  
  });
  return checkbox;
}; 
console.log(createLevelOptions());
