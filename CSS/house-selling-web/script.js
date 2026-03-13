function contact() {
    alert("Thank you for your interst! Our agent will contact you soon.");

}

function filterHouses(type){
    let houses = document.querySelectorAll(".house");


    houses.forEach(function(houses){

        if(type === "all") {
            houses.style.display = "block";
        }

        else{
            houses.style.display = "none";
        }
    });
}