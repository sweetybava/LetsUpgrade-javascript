// Object list in array
window.onload = function () {
let initialdesigners = [
    {
      name: "Bavatharani",
      age: 19,
      work: "Designer",
      salary: "25,000",
    },
    {
        name: "Celine",
        age: 22,
        work: "Fashion",
        salary: "35,000",
    },
    {
        name: "Rohan",
        age: 21,
        work: "Artist",
        salary: "33,000",
    },
];
//    localstorage

  if(localStorage.getItem("designers") == null){
     localStorage.setItem("designers", JSON.stringify(initialdesigners));
  }
};
// Object function call

function display(designlist = undefined) {
    let tabledata="";
    let designers;
    
    if (designlist == undefined) {
        designers = JSON.parse(localStorage.getItem("designers"));
    }
    else {
        designers = designlist;
    }

    designers.forEach(function (design, index) {
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${design.name}</td>
        <td>${design.age}</td>
        <td>${design.work}</td>
        <td>${design.salary}</td>
        <td>
        <button onClick="deletedesign(${index})">Delete</button>
        <button onClick="showModal(${index})">Update</button>
        </td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
};

display();

// Add input value to the table

function adddesign(e) {
    e.preventDefault();
    let design = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let work = document.getElementById("work").value;
    let salary = document.getElementById("salary").value;
    design.name = name;
    design.age = Number(age);
    design.work = work;
    design.salary = salary;

    // localstorage

    let designers = JSON.parse(localStorage.getItem("designers"));
    designers.push(design);
    localStorage.setItem("designers", JSON.stringify(designers));
    
    display();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("work").value = "";
    document.getElementById("salary").value = "";
    
}

// Delete function

function deletedesign(index) {
    // localStorage

    let designers = JSON.parse(localStorage.getItem("designers"));

     designers.splice(index,1);
    localStorage.setItem("designers", JSON.stringify(designers));
     display();
}

// Search function

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    
    // localstorage

    let designers = JSON.parse(localStorage.getItem("designers"));

    let newdata = designers.filter(function (design) {
       return (
          design.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
       );
    });
    
    display(newdata);
}

// Update form input

let updateIndex;

function copydesign(index) {

    // localstorage

    let designers = JSON.parse(localStorage.getItem("designers"));
    updateIndex = index;
    let design= designers[index]

    document.getElementById("upname").value = design.name;
    document.getElementById("upage").value = design.age;
    document.getElementById("upwork").value = design.work;
    document.getElementById("upsalary").value = design.salary;
    
}

function updatedesign(e) {
    e.preventDefault();

    // localstorage

    let designers = JSON.parse(localStorage.getItem("designers"));
    let design = designers[updateIndex];
    
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let work = document.getElementById("upwork").value;
    let salary = document.getElementById("upsalary").value;
    design.name = name;
    design.age = Number(age);
    design.work = work;
    design.salary = salary;

    localStorage.setItem("designers", JSON.stringify(designers));
    console.log(design);
    display(designers);

    
}

// Update form details

function showModal(index){
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display = "block";

    copydesign(index);
 }
 
function hideModal(event){
     if(event.target.className == "modal"){
 
     let modal=document.getElementsByClassName("modal")[0];
     modal.style.display = "none";
     }
}

