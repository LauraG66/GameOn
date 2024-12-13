function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("icon-nav").addEventListener("click", editNav)

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const modalValidate = document.querySelector(".modal-vaidate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// VALIDATION AUTOMATIQUE

const firstnameInput = document.querySelector("#first");
firstnameInput.addEventListener("change", (event) =>  {
  const errorDiv = document.querySelector("#firstError");
  if (event.target.value.trim().length < 2)
  {
    errorDiv.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else {
    errorDiv.innerHTML= "";
  }
});


const lastnameInput = document.querySelector("#last");
lastnameInput.addEventListener("change", (event) =>  {
  const errorDiv = document.querySelector("#lastError");
  if (event.target.value.trim().length < 2)
  {
    errorDiv.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    errorDiv.innerHTML= "";
  }
});

const emailAddressInput = document.querySelector("#email");
emailAddressInput.addEventListener("change", (event) => {
  const regex = new RegExp("^[A-Za-z0-9.\-_]+@[A-Za-z0-9.\-_]+\.[A-Za-z]+");
  const errorDiv = document.querySelector('#emailError');
  if (!regex.test(event.target.value)) {
    errorDiv.innerHTML = "Veuillez entrer votre adresse email.";
  } else {
    errorDiv.innerHTML= "";
  }
});

const birthdateInput = document.querySelector("#birthdate");
birthdateInput.addEventListener("change", (event) =>  {
  const regex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
  const errorDiv = document.querySelector("#birthdateError");
  if (!regex.test(event.target.value)) {
    errorDiv.innerHTML = "Veuillez entrer votre date de naissance.";
  } else {
    errorDiv.innerHTML= "";
  }
  console.log(regex.test(event.target.value)) 
  console.log(event.target.value)
});

const quantityInput = document.querySelector("#quantity");
quantityInput.addEventListener("change", (event)=> {
  const errorDiv = document.querySelector("#quantityError");
  if (event.target.value.length == 0) {
     errorDiv.innerHTML = "Veuillez entrer une valeur.";
  } else {
    errorDiv.innerHTML= "";
  }
});

const locationInput = document.querySelectorAll("input[name='location']");
locationInput.forEach(element => (
  element.addEventListener("change", (event) => {
    const errorDiv = document.querySelector("#locationError"); 
    errorDiv.innerHTML= "";
  })
))

const checkbox1Input = document.querySelector("#checkbox1");
checkbox1Input.addEventListener("click", (event) => {
  const errorDiv = document.querySelector("#checkbox1Error");
  if (!event.target.checked) {
    errorDiv.innerHTML = "Veuillez accepter les conditions.";
  } else {
    errorDiv.innerHTML= "";
  }
});

const submitBtn = document.querySelector(".btn-submit");
submitBtn.addEventListener("click", confirmModal);

// FONCTION COUPE EXECUTION SI ERREUR

function confirmModal(evt) 
{ 
  evt.preventDefault()
  let error = false


  // DEUXIEME VERIFICATION PAR ENVOI DU FORMULAIRE
  
  const firstnameInput = document.querySelector("#first");
  const firstErrorDiv = document.querySelector("#firstError");
  if (firstnameInput.value.trim().length < 2)
  {
    firstErrorDiv.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    error = true 
  } else {
    firstErrorDiv.innerHTML= "";
  }
  
  const lastnameInput = document.querySelector("#last");
  const lastErrorDiv = document.querySelector("#lastError");
  if (lastnameInput.value.trim().length < 2)
  {
    lastErrorDiv.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    error = true 
  } else {
    lastErrorDiv.innerHTML= "";
  }

  const emailAddressInput = document.querySelector("#email");
  const emailAdressRegex = new RegExp("^[A-Za-z0-9.\-_]+@[A-Za-z0-9.\-_]+\.[A-Za-z]+");
  const emailErrorDiv = document.querySelector("#emailError");
  if (!emailAdressRegex.test(emailAddressInput.value)) {
    emailErrorDiv.innerHTML = "Veuillez entrer votre adresse email.";
    error = true
  } else {
    emailErrorDiv.innerHTML= "";
  }

  const birthdateInput = document.querySelector("#birthdate");
  const birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
  const birthdateErrorDiv = document.querySelector("#birthdateError");
  if (!birthdateRegex.test(birthdateInput.value)) {
    birthdateErrorDiv.innerHTML = "Veuillez entrer votre date de naissance.";
    error = true
  } else {
    birthdateErrorDiv.innerHTML= "";
  }

  const quantityInput = document.querySelector('#quantity')
  const quantityError = document.querySelector('#quantityError')
  if (quantityInput.value.length == 0) {
    quantityError.innerHTML = "Veuillez entrer une valeur.";
    error = true
  } else {
    quantityError.innerHTML = "";
  }

  const location = document.querySelector('input[name="location"]:checked')
  const locationErrorDiv = document.querySelector("#locationError")
  if (location == null) {
    locationErrorDiv.innerHTML = "Veuillez choisir un lieu"
    error = true
  } else {
    locationErrorDiv.innerHTML = ""
  }

  const checkbox1Input = document.querySelector('input[name="checkbox1"]:checked')
  const checkbox1Error = document.querySelector("#checkbox1Error")
  if (checkbox1Input == null) {
    checkbox1Error.innerHTML = "Veuillez accepter les conditions.";
    error = true;
  } else {
    checkbox1Error.innerHTML = "";
  }

  // SI FORMULAIRE VALIDE POPUP REUSSITE
  if (!error) {
    const modalText = `<div id="confirmMessage">
      <div> Merci ! Votre réservation a été reçue.</div>
      <input
      id="closeButton"
      class="modal-btn"
      type="submit"
      class="button"
      value="Fermer"/> 
    </div> `;
    modalBody.innerHTML= modalText;
    document.getElementById("closeButton").addEventListener("click", closeModal)
  }
}

// FERMETURE DE LA FENETRE POPUP
const close = document.querySelector(".close");
close.addEventListener("click", closeModal);
function closeModal()
{
  modalbg.style.display = "none";

}

