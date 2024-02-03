let username=document.getElementById("username")
let password=document.getElementById("password")
var flag=1
function validateForm(){
    if (username.value==="") {
        document.getElementById("userError").innerHTML="username is empty"
        flag=0
    }
    else{
        document.getElementById("userError").innerHTML=""
        flag=1
    }
    if (password.value==="") {
        document.getElementById("passError").innerHTML="password is empty"
        flag=0
    }
    else if(password.value.length<6){
        document.getElementById("passError").innerHTML="require min 6 characters"
        flag=0
    }
    else{
        document.getElementById("passError").innerHTML=""
        flag=1
    }

    if (flag) {
        return true
    } else {
        return false
    }
}