const popupContainer = document.querySelector('.popup-msg-container');
const popupMsg = document.querySelector('.popup-msg');
const openConfirmMsg = document.querySelector('.open-confirm-msg');
const closeConfirmMsg = document.querySelector('.close-confirm-msg');
let isActive = false;

// Show an element
var show = function () {
    isActive = true
	popupContainer.style.display = "block"
    popupMsg.classList.add('isVisible');
};

// Hide an element
var hide = function () {
    isActive = false
    popupMsg.classList.remove('is-visible');
    popupContainer.style.display = "none";
};

// Toggle element visibility
var toggle = function () {

	// If the element is visible, hide it
	if (isActive) {
		hide();
		return;
	}

	// Otherwise, show it
	show();
	
};

// Listen for click events
openConfirmMsg.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('open-confirm-msg')) return;

	// Toggle the content
	toggle();

}, false);

// Listen for click events
closeConfirmMsg.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('close-confirm-msg')) return;

	// Toggle the content
	toggle();

}, false);