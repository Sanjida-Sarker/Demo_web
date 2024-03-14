const login = document.getElementsByClassName("login")[0];
const form_dec = document.getElementsByClassName("form_dec")[0];
const pass_format = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const name_format = /^[a-zA-Z]+$/;

login.addEventListener("click",backtologin);

function backtologin(){
    location.href = "index.html";
}

form_dec.addEventListener("submit",register)

function register(e){
    e.preventDefault();
    let f_name = e.target.fname.value;
    let l_name = e.target.lname.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    let cnfrm = e.target.cnfrm.value;
    console.log(e.target);

    if(!name_format.test(f_name)){
        alert("Wrong text type");
        return;
    }
    if(!name_format.test(l_name)){
        alert("Wrong text type");
        return;
    }
    if(!pass_format.test(pass)){
        alert("Wrong password type");
        return;
    }
    if(!pass_format.test(cnfrm)){
        alert("Wrong password type");
        return;
    }
    if(pass!=cnfrm){
        alert("Password is not same");
        return;
    }

    localStorage.setItem("email",email);
    localStorage.setItem("pass",pass);
    alert("Registration successful");
    location.href = "index.html";
}