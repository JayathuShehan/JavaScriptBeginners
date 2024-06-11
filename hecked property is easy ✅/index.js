const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with master card`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Pay Pal`;
    }
    else{
        paymentResult.textContent = `You must select payment method`;
    }
}