/* eslint-disable no-unused-vars */
const EmailValidation = (() => {
  const email = document.querySelector('#UserMail')

  function emailcheking () {
    if (email.checkValidity()) {
      errorMessage('Nice')
    } else if (email.validity.typeMismatch) {
      errorMessage('make sure this is an Email')
    } else if (email.validity.valueMissing) {
      errorMessage('so close, just fill me in')
    }
  }

  function errorMessage (message, selector = '#Mail span') {
    const ErrorMessage = document.querySelector(selector)
    ErrorMessage.textContent = message
  }
  email.addEventListener('input', emailcheking)

  return { errorMessage, emailcheking }
})()

const CountryValidation = (() => {
  const Country = document.querySelector('#Country')

  function countryValidation () {
    if (Country.checkValidity()) {
      EmailValidation.errorMessage('Nice', '#Country + span')
    } else if (Country.validity.typeMismatch) {
      EmailValidation.errorMessage('Make sure it is a code', '#Country + span')
    } else if (Country.validity.tooShort) {
      EmailValidation.errorMessage('Too short for a country code', '#Country + span')
    } else if (Country.validity.valueMissing) {
      EmailValidation.errorMessage(' add a country code', '#Country + span')
    } else if (Country.validity.patternMismatch) {
      EmailValidation.errorMessage('wrong format', '#Country + span')
    }
  }

  Country.addEventListener('input', countryValidation)
  return { countryValidation }
})()

const ZipCodeValidation = (() => {
  const ZipCode = document.querySelector('#zipcode')
  function ZipCodeValid () {
    if (ZipCode.checkValidity()) {
      EmailValidation.errorMessage('Nice', '#zipcode + span')
    } else if (ZipCode.validity.valueMissing) {
      EmailValidation.errorMessage('Enter Value', '#zipcode + span')
    } else if (ZipCode.validity.typeMismatch) {
      EmailValidation.errorMessage('Makesure it is a number', '#zipcode + span')
    } else if (ZipCode.validity.rangeUnderflow) {
      EmailValidation.errorMessage('too small for a zipcode', '#zipcode + span')
    } else if (ZipCode.validity.rangeOverflow) {
      EmailValidation.errorMessage('too large for a zipcode', '#zipcode + span')
    }
  }
  ZipCode.addEventListener('input', ZipCodeValid)
  return { ZipCodeValid }
})()

const password = (() => {
  const confirmPasswords = document.querySelector('#confirmPassword')
  const password = document.querySelector('#password')

  function passwordschecking () {
    if ((confirmPasswords.value === password.value) && (!(confirmPasswords.value === ''))) {
      EmailValidation.errorMessage('Passwords  match', '#confirmPassword + span')
      confirmPasswords.style.setProperty('background-color', 'greenyellow')
    } else {
      EmailValidation.errorMessage("Passwords don't match", '#confirmPassword + span')
      confirmPasswords.style.setProperty('background-color', 'red')
    }
  }

  confirmPasswords.addEventListener('input', passwordschecking)

  function PasswordValidations () {
    MustContainUppercase()
    mustHaveANumber()
    notEmpty()
  }
  function notEmpty () {
    password.validity.valueMissing ? EmailValidation.errorMessage('Fill in a password', '#password + span') : EmailValidation.errorMessage('', '#password + span')
  }
  function MustContainUppercase () {
    password.value.split('').forEach(letter => {
      if (letter.toUpperCase() === letter) {
        EmailValidation.errorMessage('', '#password + span')
        document.querySelector('#password').style.setProperty('background-color', 'greenyellow')
      } else {
        EmailValidation.errorMessage('Must contain upperCase', '#password + span')
        document.querySelector('#password').style.setProperty('background-color', 'red')
      }
    })
  }
  function mustHaveANumber () {
    for (let i = 0; i < password.value.split('').length; i++) {
      if (!(isNaN(password.value.split('')[i]))) {
        EmailValidation.errorMessage('yes a number', '#password + span')
        document.querySelector('#password').style.setProperty('background-color', 'greenyellow')

        return
      }

      EmailValidation.errorMessage('Must contain a number', '#password + span')
      document.querySelector('#password').style.setProperty('background-color', 'red')
    }
  }

  const submit = document.querySelector('button')
  submit.addEventListener('click', function () {
    PasswordValidations()
    passwordschecking()
    EmailValidation.emailcheking()
    CountryValidation.countryValidation()
    ZipCodeValidation.ZipCodeValid()
  })
})()

const PreventFormRefresh = (() => {
  const form = document.querySelector('form')
  function submitForm (event) {
    event.preventDefault()
  }
  form.addEventListener('submit', submitForm)
})()
