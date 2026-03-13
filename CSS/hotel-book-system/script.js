function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    let checkin = document.getElementById("checkin").value;

    let checkout = document.getElementById("checkout").value;

    let room = document.getElementById("room").value;

    let message = document.getElementById("message");

    if (name === "" || checkin === "" || checkout === "" || room === "") {
        message.style.color = "red";
        message.innerText = "Please fill all details!";
    } else {
        message.style.color = "green";
        message.innerText = `Thank you ${name}! Your ${room} room is booked.`;
        
        document.getElementById("bookingForm").reset();
    }
});
