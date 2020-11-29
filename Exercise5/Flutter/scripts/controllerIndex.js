function Validate()
{
    let email = document.getElementsByClassName("auth-input")[0].value;
    let password = document.getElementsByClassName("auth-input")[1].value;
    var data = document.getElementsByClassName("auth-input");
    let emailStatus = emailValidate(email);
    let passStatus = passValidate(password);

    if(passStatus==true && emailStatus == true)
    {
        document.getElementById("errors").innerHTML = "";
        alert("Success");
    }
}

function emailValidate(email)
{
    if (email.indexOf("@") < 0)
    {
        document.getElementById("errors").innerHTML = "Not a valid email.";
        return false;
    }
    else if (email.indexOf("@") > email.lastIndexOf("."))
    { 
        document.getElementById("errors").innerHTML = "Not a valid email.";
        return false;
    }
    
    if (email.length < 5) 
    {
        document.getElementById("errors").innerHTML = "The email have to be longer than 5 charaters.";
        return false;
    }
    document.getElementById("errors").innerHTML = "";
    return true;
}

function passValidate(password)
{
    if(password.length<6)
    {
        document.getElementById("errors").innerHTML = "The password has to be longer than 6 charaters.";
        return false;
    }
    let upperCase = false;
    let number = false;
    let specialSymbol = false;

    for(let i = 0; i < password.length; i++)
    {
        if(password[i] >= '0' && password[i]<='9')
        {
            number = true;
        }
        if(password[i]>='A'&&password[i]<='Z')
        {
            upperCase=true;
        }
        if(password[i]=='!' || password[i]=='@' ||  password[i]=='#' || password[i]=='$' || password[i]=='%' || password[i]=='^' || password[i]=='&')
        {
            specialSymbol = true;
        }
    }
    if(upperCase==true&&number==true&&specialSymbol==true)
    {
        document.getElementById("errors").innerHTML = "";
        return true;
    }
    else document.getElementById("errors").innerHTML = "The password is invalid 1. ";
    return false;
}
