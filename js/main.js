let input = document.querySelector('.input')
const text = document.querySelector('.text')
const btn = document.querySelector('.button')
const start = document.querySelector('.start')
let conceivedNumber = Math.floor(Math.random() * 100)
let numValue
let counter = 0

start.addEventListener('click', () => {
	btn.classList.add('active')
	input.classList.add('active')
	console.log(conceivedNumber);
	text.textContent = 'Начинаем! Введи число от 0 до 100'
})

btn.addEventListener('click', () => {
	numValue = input.value
	if (conceivedNumber == numValue) {
		text.textContent = `Верно! Количество попыток ${counter += 1}`
	} else if (numValue > 100 || numValue < 0) {
		text.textContent = 'Введи число от 0 до 100!'
		input.value = ''
	} else if (numValue === '') {
		text.textContent = `Введи число!`
	} else if (conceivedNumber > numValue) {
		text.textContent = 'Maло, попробуй еще раз!'
		input.value = ''
		counter += 1
	} else if (conceivedNumber < numValue) {
		text.textContent = 'Много, попробуй еще раз!'
		input.value = ''
		counter += 1
	}
})




