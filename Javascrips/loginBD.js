
const loginBtn = document.querySelector("#loginbtn");
const signupBtn = document.querySelector("#signUpbtn");
const loginSec = document.querySelector("#loginCard")
const signUpSec = document.querySelector("#signUpcard")

function reversehandle() {

    const a = signUpSec.classList;
    a.add("reverse-back")

    const b = signUpSec.classList;
    b.add("reverse-front")



    // signUpSec.innerHTML.classList.add("reverse-right")

}
function reversehandle2() {

    const a = signUpSec.classList;
    a.remove("reverse-back")

    const b = signUpSec.classList;
    b.remove("reverse-front")
    console.log("hellooo")



    // signUpSec.innerHTML.classList.add("reverse-right")

}


// Signup Data Base

const signusername = document.querySelector("#signUserName")
const signEmail = document.querySelector("#signEmail")
const signPswd = document.querySelector("#signPswd")
const signCPswd = document.querySelector("#signCPswd")

const signUpHandler = () => {

    const userData = JSON.parse(localStorage.getItem("userData")) || []

    console.log(userData)

    // checkin Filed

    if (!signUserName.value || !signUserName.value || !signUserName.value || !signPswd.value || !signCPswd.value) return alert("Required Filefd is not Filled !!")

    // checking length

    if (signPswd.value.length < 2) return alert("Password Length Should be 8 Cheracters")

    // Check Password & CPassword as Same
    if (signPswd.value != signCPswd.value) return alert("Password Not Match")

    // CheckUser found ||  Diplicate registratiom

    const userNameFound = userData.find((userCheck) => {

        if (userCheck.signusername === signUserName.value) return userCheck

    })

    if (userNameFound) return alert("User Already Registered")

    const userEmailFound = userData.find((UserEmail) => {

        if (userEmail.signEmail === signEmail.value) return userEmail

    })
    if (userEmailFound) return alert("User Email Already Exist")



    const user = {

signusername: signUserName.value,
 signEmail: signEmail.value,
 signPswd : signPswd.value,
 signCPswd : signCPswd.value,

    }

    userData.push(user)

    localStorage.setItem("UserData", JSON.stringify(userData))

    alert("SignUp Successfully")

    setTimeout(() => {

        window.location.href = "./login.html"
    } , )


}


// login dataBase

let 


