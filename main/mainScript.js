
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

