var form = document.querySelector('.form-to-contact')
var submitbtn = form.querySelector('.submit-form')
var fields = form.querySelectorAll('.field')
var numbers = form.querySelector('.number')
var younames = form.querySelectorAll('.youname')

form.addEventListener('submit', function (event) {
  event.preventDefault()


var errors = form.querySelectorAll('.error')


  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = '#000'
      error.innerHTML = 'Ви не заповнили форму'
      form[i].parentElement.insertBefore(error, fields[i])
    }

    /*else if(younames.value !== /^[а-яА-Я]+$/.value){
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = '#000'
      error.innerHTML = 'Будь ласка, вводьте тільки букви.'
      younames.parentElement.insertBefore(error, younames)
    }


    else if(numbers.value !== /^[0-9]+$/.value){
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = '#000'
      error.innerHTML = 'Будь ласка, вводьте тільки цифри. Доступні цифри: "0-9"'
      numbers.parentElement.insertBefore(error, numbers)
    }*/

    
 }
})
