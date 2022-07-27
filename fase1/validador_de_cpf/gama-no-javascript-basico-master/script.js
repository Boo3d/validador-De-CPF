console.log('JavaScript carregado')

function validarCPF(cpf) {
    console.log(cpf.length)
    if(cpf.length != 11) {
        return false
    }
    else {
        let numeros = cpf.substring(0, 9)
        let digitos = cpf.substring(9)
        
        let soma = 0
        
        for(let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }

        let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)

        if (resultado != digitos.charAt(0)) {
            return false
        }

        soma = 0
        numeros = cpf.substring(0, 10)

        for (let k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        if ( resultado != digitos.charAt(1)) {
            return false
        }

        return true
    }
}

function validacao() {
    console.log('Iniciando validação CPF')
    
    let cpf = document.getElementById('cpfDigitado').value
    
    let resultadoValidacao = validarCPF(cpf)

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
        document.getElementById('error').style.display = 'none'
    }
    else {
        document.getElementById('error').style.display = 'block'
        document.getElementById('success').style.display = 'none'
    }
}