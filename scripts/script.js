// 1. selecteer het hamburger icoon
const hamButton = document.querySelector(".hamburger-icon");
// 1. selecteer hamburger-menu button
const hamSluitButton = document.querySelector(".hamburger-menu button");
// 1. selecteer het hamburger-menu
const hamMenu = document.querySelector(".hamburger-menu");

// 2. voeg een event toe voor het openen van het hamburger-menu
hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("active");
  hamMenu.classList.add("is-open");
});

// 2. voeg een event toe voor het sluiten van het hamburger-menu
hamSluitButton.addEventListener("click", () => {
  hamButton.classList.toggle("is-open");
  hamMenu.classList.remove("is-open");
});



// code voor tabben negeren wanneer hamburger-menu gesloten is
const menu = document.getElementById('menu');
const links = hamMenu.querySelectorAll('a');

hamButton.addEventListener('click', () => {
  const open = hamButton.getAttribute('aria-expanded') === 'true';
  hamButton.setAttribute('aria-expanded', !open);
  hamMenu.hidden = open;

  links.forEach(link => {
    link.tabIndex = open ? -1 : 0;
  });
});



// 1. selecteer button waarmee je een rood harje krijgt
// querySelectorAll, omdat ik alle heart buttons wil selecteren en niet alleen de eerste
const likeButton = document.querySelectorAll('.heart-button');
// 1. selecteer button waarmee je een succesmelding krijgt na het klikken op de likeButton
const successMessage = document.querySelector('.success-message');
// 1. selecteer de button waarmee je het success-message mee sluit
const closeSuccessMessageButton = document.querySelector('.success-message-close-button');

// 2. klik-event toevoegen voor elke likeButton
likeButton.forEach(heartButton => {
    heartButton.addEventListener('click', toggleFunction);
});

closeSuccessMessageButton.addEventListener('click', hideSuccessMessage);

// 3. verander de classes heart-button en success-message naar liked en visible,
// zodat er een interactie plaats vindt
// this staat voor de heart-button waarop je hebt geklikt
// timer van 2.5s als er niet op sluitknop wordt geklikt
function toggleFunction() {
    this.classList.toggle('liked');
    successMessage.classList.add('success-message-visible');

    setTimeout(() => {
        hideSuccessMessage()
    }, 2500);
}

function hideSuccessMessage() {
    successMessage.classList.remove('success-message-visible');
}



// intersection observer

// const observer = new IntersectionObserver((entries))

// hiddenElements.forEach((el) => observer.observe(el));


const hiddenElements = document.querySelectorAll('.hidden');

// console.log(hiddenElements)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const intersecting = entry.isIntersecting

    if (intersecting == true) {

        entry.target.classList.remove("hidden")
    }

  })
})

hiddenElements.forEach( hiddenElement => {
    observer.observe( hiddenElement )
} )



// USER INVALID CODE

// 1. zoek het input element
const inputElement = document.querySelector('input');

// 2. voeg een event toe
inputElement.addEventListener('invalid', function() {
  // 3. voeg een invalid bericht toe
  inputElement.setCustomValidity('Stop');
});