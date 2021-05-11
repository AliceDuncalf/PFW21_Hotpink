
function DOMcategoryDiv() {
    let categoryDiv = document.createElement("div");
    let programBox = document.createElement("div");
    programBox.classList.add("programbox");
    categoryDiv.classList.add("categories");
    document.querySelector("#HittaProgram").append(categoryDiv);
    document.querySelector("#HittaProgram").append(programBox);

    
    let categoryName = FIELDS.map(obj => obj.name);
    console.log(categoryName);
    
    // for (i = 0; i < categoryName.length; i++) {
    //     categoryDiv.innerHTML += '<button id="selectBox"></button>';
    //   }

      categoryName.forEach(category => {
        let button = document.createElement("button");
        button.classList.add("selectBox")
        document.querySelector(".categories").append(button);    
    });

    
};

DOMcategoryDiv();



// let categoryName = FIELDS.map(obj => obj.name);
// console.log(categoryName);
 

// categoryName.forEach(element => {
//     let div = document.createElement("div");
//     div.classList.add("hej");
// });

