
function DOMcategoryDiv() {
    let categoryDiv = document.createElement("div");
    let programBox = document.createElement("div");
    programBox.classList.add("programbox");
    categoryDiv.classList.add("categories");
    document.querySelector("#HittaProgram").append(categoryDiv);
    document.querySelector("#HittaProgram").append(programBox);
};

DOMcategoryDiv();

console.log(FIELDS);

let c = CITIES.map(obj => obj.name);
console.log(c);

