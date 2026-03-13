// class Payment {
//     constructor( accountNumber, amount, name);


//     function sendMoney(){
//    // the logic the send money 
//     }


//     function requestMoney() {
//         // logic the request money
//     }
// }

// interface payment {
//     sendMoney();

//     requestMoney();
// }



class Paymentinterface {
    processPayment(amount) {
        throw "Not Implemented!";
    }


    refund(id) {
        throw "Not Implemented"
    }
}

class Razorpay extends Paymentinterface{
    processPayment(amount) {
        console.log("Razorpay pay: , amount");
    }


    //refund(id) {
        //console.log("Razorpay refund :", id );
    //}
}

