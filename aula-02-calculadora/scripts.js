calculate = () => {
    let total = 0;
    
    const numberone = document.querySelector('#numberone')
    const numbertwo = document.querySelector('#numbertwo')
    const operator = document.querySelector('#operator')

    const numberOneInt = Number(numberone.value)
    const numberTwoInt = Number(numbertwo.value)

    switch (operator.value) {
        case '+': 
            total = numberOneInt + numberTwoInt;
            break;
        case '-': 
            total = numberOneInt - numberTwoInt;
            break;
        case '*': 
            total = numberOneInt * numberTwoInt;
            break;
        case '/': 
            total = numberOneInt / numberTwoInt;
            break;
        default:
            alert('Operador inválido')
    }
    return total;
}


Init = {
    submit(event) {
        event.preventDefault();

        document.querySelector('#totalDisplay')
        .innerHTML = calculate();
    }
}