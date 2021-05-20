const secretNumber = parseInt(Math.random() * 10);

tentativas = 3;

document.querySelector('#tentativas').innerText = `Você tem ${tentativas} tentativas`

save = (event) => {
    event.preventDefault();
    
    let escolha = document.querySelector('#number')
    
    while(tentativas > 0 && escolha.value != '') {
        

        if (escolha.value == secretNumber) {
            document.querySelector('#resultado')
            .innerText = "SIM! O Número está correto! PARABÉNS!"

            document.querySelector('#tentativas')
            .innerText = ''
            
            break;
        } else if (escolha.value > secretNumber){
            document.querySelector('#resultado')
            .innerText = "Não :/ O número escolhido está MAIOR"
            
            escolha.value = ''
            
            tentativas--
        } else {
            document.querySelector('#resultado')
            .innerText = "Não :/ O número escolhido está MENOR"
            
            escolha.value = ''
            
            tentativas--
        }
        document.querySelector('#tentativas')
        .innerText = `Você tem mais ${tentativas} ${tentativas > 1 ? 'Tentativas' : 'Tentativa'} `
    }

    if (tentativas == 0) {
        alert('Suas tentativas acabaram :/ Tente acertar um novo número!')
        location.reload();
    }
}
