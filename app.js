const emailinput = document.getElementById("email-input");
const emailerror = document.getElementById("email-error");

function validatemail() {

    if (!emailinput.value.match((/^[A-Za-z0-9._-]+@gmail\.com$/))) {
        emailerror.innerText = "Please enter a valid email"
        return false
    }
    else {
        emailerror.innerText = ""
        return true
    }
}

var eightcharctorstatus=0;
var lowercasestatus=0;
var uppercasestatus=0;
var numericalstatus=0;
var specialcharactorstatus=0;
var passcode;
var passwordstatus=0;


function validatepassword(val) {
    passcode=val;

    const passclass = document.getElementsByClassName("password-check");
    const lowercase = new RegExp('([a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const numerical = new RegExp('(?=.*[0-9])');
    const specialcharactor = new RegExp('(?=.*[!@#\$%\^\*])');
    const eightcharctor = new RegExp('(?=.{8,})');


    if (eightcharctor.test(val)) {
        passclass[0].style.color = "green";
        eightcharctorstatus=1;
    }
    else {
        passclass[0].style.color = "black";
        eightcharctorstatus=0;
    }
    if (lowercase.test(val)) {
        passclass[1].style.color = "green";
        lowercasestatus=1;
    }
    else {
        passclass[1].style.color = "black";
        lowercasestatus=0;
    }
    if (uppercase.test(val)) {
        passclass[2].style.color = "green";
        uppercasestatus=1;
    }
    else {
        passclass[2].style.color = "black";
        uppercasestatus=0;
    }
    if (numerical.test(val)) {
        passclass[3].style.color = "green";
        numericalstatus=1;
    }
    else {
        passclass[3].style.color = "black";
        numericalstatus=0;
    }
    if (specialcharactor.test(val)) {
        passclass[4].style.color = "green";
        specialcharactorstatus=1;
    }
    else {
        passclass[4].style.color = "black";
        specialcharactorstatus=0;
    }

    passwordstatus=eightcharctorstatus&&lowercasestatus&&uppercasestatus&&numericalstatus&&specialcharactorstatus;
    
}
var loginflag=0;
function validateconformpassword(val){
    if((val==passcode)&&passwordstatus)
    {
         document.getElementById("conformpasserror").innerText="";
         loginflag=1;
    
    }
    else{
        document.getElementById("conformpasserror").innerText="passwords are not matched";
        loginflag=0;
    }
}

function login(){
    if(loginflag){
        emailinput.value="";
        document.getElementById("email-password").value="";
        document.getElementById("email-conform-password").value="";
    
        const passclass = document.getElementsByClassName("password-check");
   
        alert("Login Successful");
        
        for(let i=0;i<passclass.length;i++)
        {
            passclass[i].style.color='#000000'
        }
        
        loginflag=0;
        
    }
    else{
        emailinput.value="";
        document.getElementById("email-password").value="";
        document.getElementById("email-conform-password").value="";
        alert("Please fill the all derails carefully"); 
        const passclass = document.getElementsByClassName("password-check");
        for(let i=0;i<passclass.length;i++)
            {
                passclass[i].style.color='#000000'
            }
            
            loginflag=0;
            
    }
}