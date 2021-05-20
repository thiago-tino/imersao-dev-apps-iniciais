Calculate = {
    dolar: document.getElementById('dolar'),
    fator: document.getElementById('fator'),

    format(value) {
     
        value = value.toLocaleString("pt-BR", 
        {
            style: "currency",
            currency: "BRL"
        }
    
    )
        return value
    },

    calc() {
        let total = 0;

        total = Calculate.dolar.value * Calculate.fator.value
    
        return total
    },
}

DOM = () => {

    document.getElementById('totalDisplay')
    .innerHTML = Calculate.format(Calculate.calc())

}

const init = {

    submit(event) {
        event.preventDefault();

        DOM()
    }
}