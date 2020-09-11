// Question 1
function changeImage() {
    const next = document.getElementById("image");
    const image = "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/04/chris-1586166786.jpg";
    
    next.src = image;
}

function nextImage() {
    const ele = document.getElementById("image");
    const image1 = "https://i.insider.com/5d4c874a2d4cb5106e2dc343?width=1100&format=jpeg&auto=webp";
   
    ele.src = image1;
}

function defaultImage() {
    const get = document.getElementById("image");
    const image2 = "https://www.indiewire.com/wp-content/uploads/2019/04/D5Up3sIW0AEMM3R.jpg";
    
    get.src = image2;
}

// Question 2

function printValue() {
    const get=document.getElementsByClassName("name");
    console.log(get[0].value);

}

// Question 3

let list = [
    {
        name: "Bava",
        age: 35,
        country: "India",
        hobbies: ["drawing", "sketches", "design"]
    },
    {
        name: "Moni",
        age: 32,
        country: "India",
        hobbies: ["draw", "movie", "designer"]
    },
    {
        name: "Poovarasan",
        age: 19,
        country: "Malasiya",
        hobbies: ["coding", "Hacking", "Music"]
    },
    {
        name: "karthi",
        age: 20,
        country: "Canada",
        hobbies: ["Movie", "Ride", "Music"]
    },
    {
        name: "Ashu",
        age: 32,
        country: "India",
        hobbies: ["dance", "study", "Music"]
    },
];

function display(list){
    list.forEach(element =>
    {
        console.log(`Name = ${element.name}, Age = ${element.age}, country = ${element.country},
        hobbies = ${element.hobbies}`);

    } );
};

display(list);

console.log("<< Object having age less than 30")

function Age() {
    for(let i=0; i< list.length; i++) {
        if(list[i].age <30){
            const element=list[i];
            console.log(`Name = ${element.name}, Age = ${element.age}, country = ${element.country},hobbies = ${element.hobbies}`);
        }
    }
};

Age();

console.log(`<< Object having country India`)

function country() {
    for(let i=0; i< list.length; i++) {
        if(list[i].country == "India"){
            const element=list[i];
            console.log(`Name = ${element.name}, Age = ${element.age}, country = ${element.country},hobbies = ${element.hobbies}`);
        }
    }
};

country();



















