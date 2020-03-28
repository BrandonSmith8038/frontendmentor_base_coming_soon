const submitButton = document.querySelector('#submit');
const input = document.querySelector('input.email');
const errorImage = document.querySelector('.form-error-img');
const errorMessage = document.querySelector('.form-error-message');

submitButton.addEventListener('click', () => {
	const inputText = input.value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText)) {
		input.value = '';
	} else {
		console.log(errorImage);
		errorImage.style.opacity = 1;
		errorMessage.style.opacity = 1;

		setTimeout(() => {
			errorImage.style.opacity = 0;
			errorMessage.style.opacity = 0;
		}, 2000);
	}
});
