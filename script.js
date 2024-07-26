// JavaScript code for mobile and desktop responsive
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// let form = document.contact; 
// let fname = document.contact.fname;
// let email = form.email;

// form.addEventListenner ("submit", funciton(e){
//     if(fname.value == ''){
//         alert("Full name is required!");
//         e.preventDefault();
//     }
//     if(email.value == ''){
//         alert("E-mail is required!");
//         e.preventDefault();
//     }
// })

// JavasScript code for contact client site verification
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');

form.addEventListener ('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim(); 
    const addrValue = addr.value.trim();

        if(fname.value == ''){
            alert("Full name is required!");
            e.preventDefault();
        }
        if(email.value == ''){
            alert("E-mail is required!");
            e.preventDefault();
        }
        if(phone.value == ''){
            alert("Phone Number is required!");
            e.preventDefault();
        }
        if(addr.value == ''){
            alert("Address is required!");
            e.preventDefault();
        }
};