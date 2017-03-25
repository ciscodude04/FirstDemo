var colors = ["red", "blue", "green", "orange"];
function randomOption(colors) {
    "use strict";
    var randomColor = Math.random(0, colors.length);
}


var msrp = document.getElementById('#MSRP').innerHTML;
var tax = document.getElementById('#TERM').innerHTML;
var term = document.getElementById('#APR').innerHTML;
var apr = document.getElementById('#TAX').innerHTML;
var downPayment = document.getElementById('#DOWNPAYMENT').innerHTML;
var tradeIn = document.getElementById('#TRADEIN').innerHTML;

function monthlyPayments() {
    var loanAmount = msrp - (downPayment - tradeIn);
    var taxTotal = loanAmount * tax;
    var aprTotal = loanAmount * apr;
    var totalLoanAmount = loanAmount + taxTotal + aprTotal;
    return totalLoanAmount;
}

monthlyPayments();