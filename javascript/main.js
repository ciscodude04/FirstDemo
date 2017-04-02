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
    document.getElementById("monthly").innerHTML = monthlyPayment;
    document.getElementById("payment").innerHTML = totalLoanAmount;
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(getTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}