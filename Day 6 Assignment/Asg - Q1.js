// Object list in array

let designers = [
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

// Object function call

function display(designlist) {
    let tabledata="";

    designlist.forEach(function (design, index) {
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

display(designers);

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

    designers.push(design);

    display(designers);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("work").value = "";
    document.getElementById("salary").value = "";
    
}
// Delete function

function deletedesign(index) {
     designers.splice(index,1);
     display(designers);
}

// Search function

function searchByName() {
    let searchValue = document.getElementById("searchName").value;

    let newdata = designers.filter(function (design) {
       return (
          design.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
       );
    });
    display(newdata);
}

