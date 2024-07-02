const date = prompt('В какой день вы родились?')
const month = prompt('В какой месяц вы родились? (число)') - 1
const year = prompt('Укажите год вашего рождения ')

function weekMounth() {
	const day = new Date(year, month, date).getDay()
	switch (day) {
		case 0:
			return alert('Вы родились в воскресенье!')
		case 1:
			return alert('Вы родились в понедельник!')
		case 2:
			return alert('Вы родились в вторник!')
		case 3:
			return alert('Вы родились в среду!')
		case 4:
			return alert('Вы родились в четверг!')
		case 5:
			return alert('Вы родились в пятницу!')
		case 6:
			return alert('Вы родились в субботу!')
	}
}

// weekMounth() // когда родился

function leapYear() {
	if (year % 400 == 0) {
		alert(`${year} год високосный`)
	} else if (year % 100 == 0) {
		alert(`${year} год не високосный`)
	} else {
		alert(`${year} год високосный`)
	}
}

// leapYear() // виосокосный год?

function howYear() {
	const nowYear = new Date().getFullYear()
	return alert(nowYear - year)
}
