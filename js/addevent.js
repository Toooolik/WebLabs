document.getElementById("buttonsub").addEventListener("click", submitBtn);
document.getElementById("resetbtn").addEventListener("dblclick", resetBtn);
function submitBtn() {
	alert ("Замовлення надійслано")
}
function resetBtn() {
	alert ("Форму очищено")
}
/*document.getElementById("formContact").addEventListener("focus", focusInput);
function focusInput() {
	formContact.classList.add('focused')
}
formContact.addEventListener("blur", () => form.classList.remove('focused'), true);*/
/*() => form.classList.add('focused'), true);*/
const input = document.querySelector(".input-text");

input.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

input.addEventListener('blur', (event) => {
  event.target.style.background = '';
});