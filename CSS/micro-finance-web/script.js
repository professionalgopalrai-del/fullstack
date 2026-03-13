// Smooth Scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Loan Calculator
function calculateLoan(){
    let amount = document.getElementById('amount').value;
    let interest = document.getElementById('interest').value / 100 / 12;
    let years = document.getElementById('years').value * 12;

    if(amount === "" || interest === "" || years === ""){
        document.getElementById('result').innerHTML = "Please fill all fields";
        return;
    }

    let emi = (amount * interest * Math.pow(1 + interest, years)) /
              (Math.pow(1 + interest, years) - 1);

    document.getElementById('result').innerHTML =
        "Monthly EMI: ₹" + emi.toFixed(2);
}

// Form Validation
function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === "" || email === "" || message === ""){
        document.getElementById('formMsg').innerHTML = "Please fill all fields.";
        document.getElementById('formMsg').style.color = "red";
        return false;
    }

    document.getElementById('formMsg').innerHTML = "Message sent successfully!";
    document.getElementById('formMsg').style.color = "green";
    return false;
}