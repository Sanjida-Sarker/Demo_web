const rgstr = document.getElementsByClassName("rg")[0];
const value = document.getElementsByClassName("form_dec")[0];
const btn = document.querySelector(".sgn_btn");


rgstr.addEventListener("click", register)
function register(){
    location.href = "registration.html"
}

value.addEventListener("submit", submit)
function submit(e){
    e.preventDefault();
    let user = localStorage.getItem("email")
    let pass = localStorage.getItem("pass")
    let username = e.target.u_name.value;
    let password = e.target.pass.value;
    if(username== user && password==pass){
        location.href="home.html";
    }
    else{
        alert("Wrong information");
    }
    console.log(username, password);
}