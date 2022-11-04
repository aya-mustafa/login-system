var nameInput =document.getElementById("studentName");
var emailInput =document.getElementById("studentEmail");
var departmentInput =document.getElementById("studentDepartment");
var passwordInput =document.getElementById("studentPassword");
var signUpButton =document.getElementById("signUp");
var studentsInfo=[];
if(JSON.parse(localStorage.getItem("studentsInfo"))!==null)
{
    studentsInfo= JSON.parse(localStorage.getItem("studentsInfo"));
}

var Inputs=document.getElementsByClassName("form-control");

var nameAlert=document.getElementById("nameAlert");
var emailAlert=document.getElementById("emilAlert");
var passwordAlert=document.getElementById("PasswordAlert");

//  ______start Validation______
    nameInput.addEventListener(("keyup"),function()
    {
        var nameRejex=/^[A-Z][a-z]{2,15}([ ][A-Z][a-z]{1,15})*$/;
        if(!nameRejex.test(nameInput.value))
        {
            if(nameInput.value=="")
            {
                nameAlert.classList.add("d-none");
                nameAlert.classList.remove("d-flex");
                nameInput.classList.remove("is-invalid");
                nameInput.classList.remove("is-valid");
                signUpButton.disabled="true"
            }
            else
            {
                nameInput.classList.add("is-invalid");
                nameInput.classList.remove("is-valid");
                nameAlert.classList.add("d-flex");
                nameAlert.classList.remove("d-none");
                signUpButton.disabled="true"
                nameAlert.innerHTML=
                `
                Please Enter Your Name that frist character is capital
                then has 3-6 small character. If name consist of 
                more than one word write others like the frist.
                `

            }
        }
        else
        {
            nameInput.classList.add("is-valid");
            nameInput.classList.remove("is-invalid");
            nameAlert.classList.add("d-none");
            nameAlert.classList.remove("d-flex");
            signUpButton.removeAttribute("disabled");
        }
    })

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
                signUpButton.disabled="true"

            }
        }
        else
        {
            emailInput.classList.add("is-valid");
            emailInput.classList.remove("is-invalid");
            emailAlert.classList.add("d-none");
            emailAlert.classList.remove("d-flex");
            signUpButton.removeAttribute('disabled')
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
                signUpButton.disabled="true"
                PasswordAlert.innerHTML=`                        
                Please Enter password that contain 8 character or number at least.  
                `;

            }
        }
        else
        {
            passwordInput.classList.add("is-valid");
            passwordInput.classList.remove("is-invalid");
            passwordAlert.classList.add("d-none");
            passwordAlert.classList.remove("d-flex");
            signUpButton.removeAttribute("disabled");
        }
    })


//  ______End Validation______


signUpButton.addEventListener("click",function()
{
    if(nameInput.value==""||emailInput.value==""||passwordInput.value=="")
    {
        alert("All input is required")
        signUpButton.disabled="true";
    }
    else
    {
        signUpButton.removeAttribute="disabled";
    }

    if((JSON.parse(localStorage.getItem("studentsInfo"))==null)) // frist add
    {
        var studentInfo=
        {
            name:nameInput.value,
            email:emailInput.value,
            department:departmentInput.value,
            password:passwordInput.value,
        }
        studentsInfo.push(studentInfo);
        localStorage.setItem("studentsInfo",JSON.stringify(studentsInfo));
        resetForm();
    }
    else // Add from two wice  at least
    {
        for(var i=0;i<studentsInfo.length;i++)
        {
            if(emailInput.value==studentsInfo[i].email)
            {
                alert("Email is Already Exist");
                break;
            }
            else if(i==(studentsInfo.length-1))//في حاله لو كان ملقهاش ووصل للنهايه
            {
                var studentInfo=
                {
                    name:nameInput.value,
                    email:emailInput.value,
                    department:departmentInput.value,
                    password:passwordInput.value,
                }
                studentsInfo.push(studentInfo)
                localStorage.setItem("studentsInfo",JSON.stringify(studentsInfo))
                resetForm();
                break;
            }
        }
    }
    
 
})

function resetForm()
{
    for(var i=0;i<Inputs.length;i++)
    {
        Inputs[i].value="";
        Inputs[i].classList.remove('is-valid')
    }
}
