function validateForm(){
    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["EMail"];
    var password=document.forms["RegForm"]["Password"];
    var confrimPassword=document.forms["RegForm"]["Confrim"];

    // console.log(name, email, password, confrimPassword);

    if(name.value == ""){
        alert("Please enter the name");
        return false;
    }
    if(email.value == ""){
        alert("Please enter the email");
        return false;
    }
    if(password.value == ""){
        alert("Please enter the password");
        return false;
    }
    if(confrimPassword.value == ""){
        alert("Please enter the password");
        return false;
    }
    if(password.value===confrimPassword.value){
        if(registerinLocalStorage()){
            alert("register is done successfully!!")
            return true;
        }else{
            return false;
        }
    }else{
        alert("Please enter the correct password and confrim password value!!");
        return false;
    }
    return true;
}

let users = JSON.parse(localStorage.getItem('userList')) ? JSON.parse(localStorage.getItem('userList')):[];

console.log(users);

function registerinLocalStorage(){
    var name=document.forms["RegForm"]["Name"].value;
    var email=document.forms["RegForm"]["EMail"].value;
    var password=document.forms["RegForm"]["Password"].value;
    var confrimPassword=document.forms["RegForm"]["Confrim"].value;

    // console.log(name, email,password,confrimPassword);

    let newUser = {
        name:name, 
        email:email,
        password:password,
        confrimPassword:confrimPassword
    }

    let userExists = users.some(user => user.email === newUser.email);

    if(userExists){
        alert("user alreay exists");
        return false;
    } else {
        users.push(newUser);
    }

    let userString = JSON.stringify(users);
    localStorage.setItem("userList", userString);
    return  true;
}

// registerinLocalStorage()