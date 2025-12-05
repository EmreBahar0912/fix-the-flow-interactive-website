// 1. selecteer button waarmee je een rood harje krijgt
// querySelectorAll, omdat ik alle heart buttons wil selecteren en niet alleen de eerste
const likeButton = document.querySelectorAll('.heart-button');
// 1. selecteer button waarmee je een succesmelding krijgt na het klikken op de likeButton
const successMessage = document.querySelector('.success-message')

// 2. klik-event toevoegen voor elke likeButton
likeButton.forEach(heartButton => {
    heartButton.addEventListener('click', toggleFunction);
});

// 3. verander de classes heart-button en success-message naar liked en visible,
// zodat er een interactie plaats vindt
// this staat voor de heart-button waarop je hebt geklikt
function toggleFunction() {
    this.classList.toggle('liked');
    successMessage.classList.toggle('success-message-visible');
}