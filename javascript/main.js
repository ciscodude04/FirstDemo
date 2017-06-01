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
    //    h = resetTime(h);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(getTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello World!");
    document.body.appendChild(x);
}

function createBreak() {
    var newbreak = document.createElement("br");
    return newbreak;
}

function addArticle() {
    var newArticle = document.createElement("div");
    newArticle.setAttribute("class", "content");
    var newText = document.createElement("b");
    var article_title = prompt("Enter title: ", "");
    var t = document.createTextNode(article_title);
    newText.appendChild(t);
    newArticle.appendChild(newText);
    newArticle.appendChild(createBreak());
    var newText2 = document.createElement("p");
    var article_body = prompt("Enter body:", "");
    var body = document.createTextNode(article_body);
    newText2.appendChild(body);
    newArticle.appendChild(newText2);
    var parentElement = document.getElementById("container");
    parentElement.appendChild(newArticle);
}
