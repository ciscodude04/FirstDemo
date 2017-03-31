var colors = ["red", "blue", "green", "orange"];

function randomOption(colors) {
    "use strict";
    var randomColor = Math.random(0, colors.length);
}




function monthlyPayments() {
    var msrp = document.getElementById("MSRP").value;
    var term = document.getElementById("TERM").value;
    var apr = document.getElementById("APR").value;
    var tax = document.getElementById("TAX").value;
    var downPayment = document.getElementById("DOWNPAYMENT").value;
    var tradeIn = document.getElementById("TRADEIN").value;
    

    var loanAmount = msrp - (downPayment - tradeIn);
    var taxTotal = loanAmount * tax;
    var aprTotal = loanAmount * apr;
    var totalLoanAmount = loanAmount + taxTotal + aprTotal;
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