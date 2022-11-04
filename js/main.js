var emailInput =document.getElementById("studentEmail");
var passwordInput =document.getElementById("studentPassword");

var emailAlert=document.getElementById("emilAlert");
var PasswordAlert=document.getElementById("PasswordAlert");

var loginBtn=document.getElementById("loginButton");

//  ______start Validation______

emailInput.addEventListener(("keyup"),function()
{
    var emailRejex=/^[A-z a-z]{3,20}([0-9])*(@gmail.com|@yahoo.com)$/;
    if(!emailRejex.test(emailInput.value))
    {
        if(emailInput.value=="")
        {
            emailAlert.classList.add("d-none");
            emailAlert.classList.remove("d-flex");
            emailInput.classList.remove("is-invalid");
            emailInput.classList.remove("is-valid");
            signUpButton.disabled="true"
        }
        else
        {
            emailInput.classList.add("is-invalid");
            emailInput.classList.remove("is-valid");
            emailAlert.classList.add("d-flex");
            emailAlert.classList.remove("d-none");

        }
    }
    else
    {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailAlert.classList.add("d-none");
        emailAlert.classList.remove("d-flex");
        signUpButton.removeAttribute("disabled");
    }
})

passwordInput.addEventListener(("keyup"),function()
{
    var passwordRejex=/^[0-9 A-Z a-z]{8,20}$/;
    if(!passwordRejex.test(passwordInput.value))
    {
        if(passwordInput.value=="")
        {
            PasswordAlert.classList.add("d-none");
            PasswordAlert.classList.remove("d-flex");
            passwordInput.classList.remove("is-invalid");
            passwordInput.classList.remove("is-valid");
            signUpButton.disabled="true"
        }
        else
        {
            passwordInput.classList.add("is-invalid");
            passwordInput.classList.remove("is-valid");
            PasswordAlert.classList.add("d-flex");
            PasswordAlert.classList.remove("d-none");
            PasswordAlert.innerHTML=`                        
            Please Enter password that contain 8 character or number at least.  
            `;

        }
    }
    else
    {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        PasswordAlert.classList.add("d-none");
        PasswordAlert.classList.remove("d-flex");
        signUpButton.removeAttribute("disabled");
    }
})

studentsInfo=JSON.parse(localStorage.getItem("studentsInfo"));
loginBtn.addEventListener("click",function()
{
    for(var i=0;i<studentsInfo.length;i++)
        {
            if(emailInput.value==studentsInfo[i].email&&passwordInput.value==studentsInfo[i].password)
            {
                localStorage.setItem("name",studentsInfo[i].name)
                loginBtn.setAttribute("href","home.html");
                break;
            }
            else if(i==(studentsInfo.length-1))
            {
                alert("Your Email or password is not exist")
            }
        }    
})



//  ______End Validation______