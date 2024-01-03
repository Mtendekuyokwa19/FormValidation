let EmailValidation=(()=>{

    let email=document.querySelector('#UserMail');
    let emailErrorMessage=document.querySelector('#Mail span')

    function emailcheking() {
        // if (email.checkValidity()) {
        //     errorMessage("Nice")
        // }
        if (email.validity.typeMismatch){

            errorMessage("make sure this is an Email")
        }
        else if(email.validity.valueMissing)[
            errorMessage("so close, just fill me in")
        ]
        else if(email.validity.patternMismatch){
            errorMessage("email wrongly typed")
        }
    }

    function errorMessage(message) {
    emailErrorMessage.textContent=message
        
    }
    email.addEventListener('input',emailcheking)




})()