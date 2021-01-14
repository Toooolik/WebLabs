let page = document.querySelector('.page');
let darkTheme = document.querySelector('.darkTheme');
let themeButton = document.querySelector('.themeButton');
let burgerPhoto = document.querySelector('.burgerPhoto');

themeButton.onclick = function () {		
	page.classList.toggle('darkTheme');
	
	if (page.classList.contains('darkTheme')) {
			burgerPhoto.src='img/burger-darkTheme.png';
		}
		
		else {
			burgerPhoto.src='img/burger.png';
		}
}