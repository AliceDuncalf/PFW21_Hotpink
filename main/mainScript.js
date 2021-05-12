
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

PROGRAMMES.forEach(programme => {
    document.querySelector(".programbox").append(DOMProgramme(programme))
})

function DOMProgramme(programme) {
  let container = document.createElement("div");
  container.classList.add("programme");

  container.innerHTML = `
    <div>${programme.name}</div>
  `;

  return container;
}


document.querySelector(".categories > div:first-child > button").addEventListener("click", ()=> {
  console.log("hej");
});


