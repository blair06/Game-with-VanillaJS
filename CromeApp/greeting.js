const form = document.querySelector(".js-form")
const input = form.querySelector("input");
const USER_LS ="currentUser",
SHOWING_CN = "showing";
const greeting = document.querySelector(".js-greeting");

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){

    } else{
        paintGreeting(currentUser);
    }
}
function init(){

}
init();