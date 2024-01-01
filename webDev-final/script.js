let container = document.querySelector(".container");
let navbar = document.querySelector(".navbar");
let detailsBtn = document.querySelector(".details");
let main = document.querySelector(".main");
let cards = document.querySelector(".cards");
let detailContainer = document.querySelector(".detailContainer");
let homeBtn =  document.querySelector(".homeBtn");
let logOut = document.querySelector(".out");
let logIn = document.querySelector(".logOutPage");
let logInBtn = document.querySelector(".logInBtn");
// ------------------------------------------
detailsBtn.addEventListener("click" , openDetails);
function openDetails(){
    let h2Title = document.querySelector(".detailContainer h2");
    h2Title.textContent="Advisor Informations";
    cards.classList.add("d-none");
    detailContainer.classList.add("d-block");
}
// ----------------------------------------------
homeBtn.addEventListener("click" , goToHome);
function goToHome(){
    cards.classList.remove("d-none");
    detailContainer.classList.remove("d-block");
}
// ----------------------------------------------
// I have tried a lot here when you click the log out button , there will be logIn page and when you click the login button 
//  you would launch the home page .However I could not.
logOut.addEventListener("click" , out);
function out(){
    container.classList.add("d-none");
    logIn.classList.remove("d-none");
}