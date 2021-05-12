
function DOMcategoryDiv() {
    let categoryDiv = document.createElement("div");
    let programBox = document.createElement("div");
    programBox.classList.add("programbox");
    categoryDiv.classList.add("categories");
    document.querySelector("#HittaProgram").append(categoryDiv);
    document.querySelector("#HittaProgram").append(programBox);

    let categoryName = FIELDS.map(obj => obj.name);
    
      categoryName.forEach(category => {
        let div = document.createElement("div");
        div.innerHTML = `<button></button><div>${category}</div`
        div.classList.add("categoryBox")
        document.querySelector(".categories").append(div);
    });

    

};

DOMcategoryDiv();


//fattae noll av vad ja försöker göra hahha
function filterProgramme(){
  let FieldID = FIELDS.map(obj => obj.id);
  let subjectID = PROGRAMMES.map(obj => obj.subjectID)

  if (FieldID === subjectID) {
    return subjectID;
}


};

filterProgramme();
