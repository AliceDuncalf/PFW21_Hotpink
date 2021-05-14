
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

//Hittar namnet på den staden som programmet är i, men är typ fel ?
function GetCityFromUniverityID(id) {

  return CITIES.find(city => city.id === id).name;
};



function GetCountryFromCityID() {
  let cityID = UNIVERSITIES.map(uni => uni.cityID) 
  console.log(cityID);
    
};

//clear
function clearAll(){
  document.querySelector("programbox").innerHTML = "";
}



//hej




















// if(document.getElementById(`${category}`) != null)  






// PROGRAMMES.forEach(programme => {
//     document.querySelector(".programbox").append(DOMProgramme(programme))
// })

// function DOMProgramme(programme) {
//   let container = document.createElement("div");
//   container.classList.add("programbox");

//   container.innerHTML = `
//     <div>${programme.name}</div>
//   `;

//   return container;
// }

//event click till matematik
// document.querySelector(".categories > div:first-child > button").addEventListener("click", ()=> {
//   let programContent = document.createElement("div");
//   programContent.classList.add("programContent");
//   document.querySelector(".programbox").append(programContent);

//   let programFilter = PROGRAMMES.filter(obj => obj.subjectID);
//   console.log(programFilter);

//   let subjectID = FIELDS.map(obj => obj.id);
//   console.log(subjectID);

//     PROGRAMMES.filter(program => {
//     if (programFilter === subjectID) {

//       let matematikArray = [];
//       matematikArray.push(program.name);
//       console.log(matematikArray);
//     };
//   })

// });


//_________________________________________________________________________________________________________________________
//nytt försök
// document.querySelector(".categories > div:first-child > button").addEventListener("click", ()=> {
//   let programContent = document.createElement("div");
//   programContent.classList.add("programContent");
//   document.querySelector(".programbox").append(programContent);






// });

// document.querySelector(".categories > div:first-child > button").addEventListener("click", ()=> {
// let programmeSubjectID = PROGRAMMES.map(obj => obj.subjectID);
// console.log(programmeSubjectID);

//   programmeSubjectID.forEach(obj => {
//     FIELDS.forEach(field => {
//       if (obj === field) {

//          let matematikArray = [];
//             matematikArray.push(field.name);
//             console.log(matematikArray);
//            };
//     })
//   })

// });


//______________________________________________________________________________________________________________________
// function findProgrammes(){
  
// FIELDS.forEach(field => {

      

//       PROGRAMMES.forEach( programme => {
//           if (programme.subjectID === field.id) {
//             let matematikArray = [];
//             matematikArray.push(programme.name);
//             console.log(matematikArray);
//           }
//       });
//   });
// }

// findProgrammes();