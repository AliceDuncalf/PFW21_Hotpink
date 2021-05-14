"use strict";

function DOMcategoryDiv() {
    let categoryDiv = document.createElement("div");
    let programBox = document.createElement("div");
    programBox.classList.add("programbox");
    categoryDiv.classList.add("categories");
    document.querySelector("#HittaProgram").append(categoryDiv);
    document.querySelector("#HittaProgram").append(programBox);

    let categoryName = FIELDS.map(obj => obj);
    console.log(categoryName);
    
      categoryName.forEach(category => {

        let div = document.createElement("div");
        div.classList.add("categoryBox")
        document.querySelector(".categories").append(div);
        div.innerHTML = `<button id="${category.name}"></button><div>${category.name}</div`
        div.querySelector(`#${category.name}`).addEventListener("click", () => {

          let FilterArray = PROGRAMMES.filter(programme => programme.subjectID === category.id);
          FilterArray.filter(obj => obj.name);
          console.log(FilterArray);

          FilterArray.forEach(program => {

          //console.log(program.name);
           let programmeContentDiv = document.createElement("div");
           programmeContentDiv.classList.add("programmeContentDiv")
            programmeContentDiv.innerHTML = `
              <div id="programmeName">${program.name}</div>
              <div id="programmeInfo">

                <div>${GetUniversityNameFromProgramme(program.universityID)}</div>
                <div>LAND</div>
                <div> ${GetCityFromUniverityID(program.universityID)}</div>
                
              </div>
            `;
            document.querySelector(".programbox").append(programmeContentDiv);
            
          });
          
        });
        
    });

};
DOMcategoryDiv();



//HITTAR NAMNET PÅ DE UNIVERSITET SOM PROGRAMME ÄR PÅ
function GetUniversityNameFromProgramme(id) {
  return UNIVERSITIES.find(univerity => univerity.id === id).name;
};

//Hittar namnet på den staden som programmet är i, men är typ FEL
function GetCityFromUniverityID(id) {

  return CITIES.find(city => city.id === id).name;
};


//hitta namn på landet // funkar absolut inte 
function GetCountryFromCityID() {
  let cityID = UNIVERSITIES.map(uni => uni.cityID) 
  console.log(cityID);
    
};

//clear
function clearAll(){
  document.querySelector("programbox").innerHTML = "";
}


//hejhej