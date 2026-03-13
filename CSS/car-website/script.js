let cars = JSON.parse(localStorage.getItem("cars")) || [
    {
        id:1,
        name:"BMW X5",
        brand:"BMW",
        price:"$65,000",
        img:'./135613.jpg',
        description:"Luxury SUV with premium comfort."
    },
    {
        id:2,
        name:"Mercedies",
        brand:"mercedies amg ",
        price:"$55,000",
        img:"./135613.jpg",
        description:"Executive sedan with advanced technology."
    }
];

localStorage.setItem("cars", JSON.stringify(cars));

function displayCars(){
    const container=document.getElementById("carContainer");
    if(!container) return;

    container.innerHTML="";
    cars.forEach(car=>{
        container.innerHTML+=`
        <div class="card">
            <img src="${car.img}">
            <h3>${car.name}</h3>
            <p>${car.price}</p>
            <button class="btn" onclick="viewDetails(${car.id})">View Details</button>
        </div>`;
    });
}

function viewDetails(id){
    localStorage.setItem("selectedCar", id);
    window.location="details.html";
}

function loadDetails(){
    const id=localStorage.getItem("selectedCar");
    if(!id) return;

    const car=cars.find(c=>c.id==id);
    const container=document.getElementById("detailsContainer");
    if(!container) return;

    container.innerHTML=`
    <div class="card">
        <img src="${car.img}">
        <h2>${car.name}</h2>
        <p><strong>Brand:</strong> ${car.brand}</p>
        <p><strong>Price:</strong> ${car.price}</p>
        <p>${car.description}</p>
        <button class="btn" onclick="alert('Booking Confirmed!')">Book Test Drive</button>
    </div>`;
}

function addCar(){
    const name=document.getElementById("name").value;
    const brand=document.getElementById("brand").value;
    const price=document.getElementById("price").value;
    const img=document.getElementById("img").value;
    const description=document.getElementById("description").value;

    const newCar={
        id:cars.length+1,
        name, brand, price, img, description
    };

    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
    alert("Car Added Successfully!");
    location.reload();
}

displayCars();
loadDetails();