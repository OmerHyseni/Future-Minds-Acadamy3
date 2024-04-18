let Fnumber = parseInt(prompt('Enter The First Number'))

let Operaction = prompt('Enter Operaction')

let Snumber = parseInt(prompt('Enter Second Number'))

//logic

let result;

if (Operaction === '+') {
    result = Fnumber + Snumber
}

else if (Operaction === '-') {
    result = Fnumber - Snumber
}

else if (Operaction === '*') {
    result = Fnumber * Snumber
}

else if (Operaction === '/') {
    result = Fnumber / Snumber
}

else {
    throw new Error('Invalid Operaction')
}

//output

document.getElementById('answer').textContent = `${result}`