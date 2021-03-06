// handle color theme
// handle password watching
// handle client side form validation
// handle signin

// handling color theme
const colors = [
    [
        "default",
        "#FFAD9E",
        "#0f0f0f2c",
        "#ff4e71ce",
        "#ff4e71",
        "#3f3f3f",
        "#ffffff",
    ],
    [
        "green",
        "#FFAD9E",
        "#0f0f0f2c",
        "#00bfa6ce",
        "#00bfa6",
        "#3f3f3f",
        "#ffffff",
    ],
    [
        "violet",
        "#FFAD9E",
        "#0f0f0f2c",
        "#9460d0ce",
        "#9460d0",
        "#3f3f3f",
        "#ffffff",
    ],
]

function setTheme(themeOptions){
    let root = document.documentElement;
    let color = themeOptions[0];
    let svgContainer = document.querySelector('.svg-container');
    let src_signup = "./assets/team-work-" + color +".svg";
    let src_signin = "./assets/explore-" + color + ".svg";
    svgContainer.children[0].setAttribute('src',src_signup);
    svgContainer.children[1].setAttribute('src',src_signin);
    root.style.setProperty('--clr-primary',themeOptions[1]);
    root.style.setProperty('--clr-primary-light',themeOptions[2]);
    root.style.setProperty('--clr-secondary',themeOptions[3]);
    root.style.setProperty('--clr-secondary-dark',themeOptions[4]);
    root.style.setProperty('--clr-text',themeOptions[5]);
    root.style.setProperty('--clr-primary-text-highlight',themeOptions[6]);
}

let colorBoxs = document.querySelectorAll('.clr');
colorBoxs.forEach((box,index)=>{
    box.addEventListener("click",e=>{
        setTheme(colors[index])
    })
})

// handling passwords watching
let closedEyes = document.querySelectorAll('.fa-eye-slash');
let openedEyes = document.querySelectorAll('.fa-eye');
closedEyes.forEach((closedEye,index)=>{
    closedEye.addEventListener('click',e=>{
        e.preventDefault();
        closedEyes[index].classList.toggle('display-hide');
        openedEyes[index].classList.toggle('display-hide');
        if (index == 0) {
            let passWordValue = document.querySelector('#password').value;
            document.querySelector('#password').type = "text";
            document.querySelector('#password').textContent = passWordValue;
        }
        if (index == 1){
            let rePasswordValue = document.querySelector('#passwordretype').value;
            document.querySelector('#passwordretype').type = "text";
            document.querySelector('#passwordretype').textContent = rePasswordValue;
        }
    })
})

openedEyes.forEach((openedEye,index)=>{
    openedEye.addEventListener('click',e=>{
        e.preventDefault();
        closedEyes[index].classList.toggle('display-hide');
        openedEyes[index].classList.toggle('display-hide');
        if (index == 0) {
            document.querySelector('#password').type = "password";
        }
        if (index == 1){
            document.querySelector('#passwordretype').type = "password";
        }
    })
})

// handle signin and signup toggle
let signInContainer = document.querySelector('.signin-container');
let signUpContainer = document.querySelector('.signup-container');

let loginLink = document.querySelector('.signin-link');
let signupLink = document.querySelector('.signup-link');

let svgContainer = document.querySelector('.svg-container');

loginLink.addEventListener('click',e=>{
    e.preventDefault();
    signInContainer.classList.toggle('display-hide');
    signUpContainer.classList.toggle('display-hide');
})

signupLink.addEventListener('click',e=>{
    e.preventDefault();
    signInContainer.classList.toggle('display-hide');
    signUpContainer.classList.toggle('display-hide');
})

// client side form validation

let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
let message = document.querySelector('.message');

// handle modal
function handleModal(messageStr){
    message.textContent = messageStr;
    modal.classList.toggle('display-hide');
    setTimeout(()=>{
        modal.classList.toggle('display-hide');
    },2000);
}

// form validation with modal pop up
function passWordsMatch(pass1,pass2){
    let password1 = pass1.trim()
    let password2 = pass2.trim()

    if (password1 === password2) return true
    return false
}

function isItEmail(emailAddress){
    let re = /\S+@\S+\.\S+/;
    return re.test(emailAddress);
}

// getting form elements
let signupUsername = document.querySelector('#name');
let signupemail = document.querySelector('#email');
let signupPassword = document.querySelector('#password');
let signUpRetypePassword = document.querySelector('#passwordretype');
let agreementCheckbox = document.querySelector('#agreement');

let signUpBtn = document.querySelector('.signup');
let signInBtn = document.querySelector('.login');

// validating signup
function validate(name='',email='',password='',retypepassword='',agreementCheckbox=true,signup){
    
    if (signup){
        let signup_count = 0;
        if (name.length !== 0) signup_count += 1
            handleModal('name cannot be empty');
        if (isItEmail(email)) signup_count += 1
            handleModal('email should be correctly formatted');
        if (agreementCheckbox) signup_count += 1

        if (retypepassword.length !== 0 || password.length !== 0){
            if (passWordsMatch(password,retypepassword)) signup_count += 1
        }
        if (signup_count == 4) return true
        return false
    }else{
        let signin_count = 0;
        if (password.length !== 0) signin_count += 1
            handleModal('name cannot be empty');
        if (isItEmail(email)) signin_count += 1
            handleModal('email should be correctly formatted');

        if (signin_count == 2) return true
        return false
    }
}

// validating signup form
signUpBtn.addEventListener('click',e=>{
    e.preventDefault();
    let name = signupUsername.value;
    let email = signupemail.value;
    let password = signupPassword.value;
    let repassword = signUpRetypePassword.value;
    let check = true    
    let signupFormState = validate(name,email,password,repassword,check,true); 
    if (!signupFormState) handleModal('Please make sure all fields are entered correctly');
})

// validating signin form
let signin_email = document.querySelector('#signin_email');
signInBtn.addEventListener('click',e=>{
    e.preventDefault();
    let email = document.querySelector('#signin_email').value;
    let password = document.querySelector('#signInpassword').value;
    if (!validate('',email,password,'',false,false)) handleModal('please enter correct field values!');
})
