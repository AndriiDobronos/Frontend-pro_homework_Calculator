const answerOfUser = prompt("Що ви хочете зробити : add, sub, mult, div","")
const firstNumber = Number(prompt("Enter first number", ""))
const secondNumber = Number(prompt("Enter second number", ""))
if (answerOfUser === null || firstNumber === null ||
    secondNumber === null) {
    alert('Your missed action')
}
else if (!(answerOfUser === "add" || answerOfUser === "sub" ||
    answerOfUser === "mult" || answerOfUser === "div")) {
    alert('Your entering date is not correct')
}
else if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    alert("error number")
}
else {
    switch (true) {
        case answerOfUser === "add" :
            const resultAdd = firstNumber + secondNumber
            alert(`${firstNumber } + ${secondNumber } = ${resultAdd}`)
            break ;
        case answerOfUser === "sub" :
            const resultSub = firstNumber - secondNumber
            alert(`${firstNumber } - ${secondNumber } = ${resultSub}`)
            break ;
        case answerOfUser === "mult" :
            const resultMult = firstNumber * secondNumber
            alert(`${firstNumber } * ${secondNumber } = ${resultMult}`)
            break ;
        case answerOfUser === "div" :
            const resultDiv = firstNumber / secondNumber
            alert(`${firstNumber } / ${secondNumber } = ${resultDiv}`)
            break ;
    }
}