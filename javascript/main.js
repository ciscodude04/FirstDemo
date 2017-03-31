var colors = ["red", "blue", "green", "orange"];

function randomOption(colors) {
    "use strict";
    var randomColor = Math.random(0, colors.length);
}


<<<<<<< HEAD


function monthlyPayments() {
    var msrp = document.getElementById("MSRP").value;
    var term = document.getElementById("TERM").value;
    var apr = document.getElementById("APR").value;
    var tax = document.getElementById("TAX").value;
    var downPayment = document.getElementById("DOWNPAYMENT").value;
    var tradeIn = document.getElementById("TRADEIN").value;
    

=======
var msrp = document.getElementById('#MSRP').innerHTML;
var tax = document.getElementById('#TERM').innerHTML;
var term = document.getElementById('#APR').innerHTML;
var apr = document.getElementById('#TAX').innerHTML;
var downPayment = document.getElementById('#DOWNPAYMENT').innerHTML;
var tradeIn = document.getElementById('#TRADEIN').innerHTML;

function monthlyPayments() {
>>>>>>> 3fb5ec431eaada6e66763b2bcd9474a1f33b5315
    var loanAmount = msrp - (downPayment - tradeIn);
    var taxTotal = loanAmount * tax;
    var aprTotal = loanAmount * apr;
    var totalLoanAmount = loanAmount + taxTotal + aprTotal;
<<<<<<< HEAD
    var monthlyPayment = totalLoanAmount / term;
    console.log(monthlyPayment)
    document.getElementById("monthly").innerHTML = monthlyPayment;
    document.getElementById("payment").innerHTML = totalLoanAmount;
}

//monthlyPayments();

function myfunkytion() {
    var input = document.getElementById("MSRP");
    if (input == "20") {
        document.getElementById("myMessage").innerHTML = "You Won!";
    } else
        document.getElementById("myMessage").innerHTML = "You Lost";
}

//myfunkytion();
=======
    return totalLoanAmount;
}

monthlyPayments();
>>>>>>> 3fb5ec431eaada6e66763b2bcd9474a1f33b5315
