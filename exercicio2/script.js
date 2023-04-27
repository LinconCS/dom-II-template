// INPUT
// esconder a senha
// onclick do botão esconder senha

// FORM
// retirar classe light
// incluir classe dark

const inputSenha = document.getElementById('password')

//console.log(inputSenha)

const escondeSenha = (event) => {
    // previne o comportamento padrão, que nesse caso é recarregar a página assim que o botão é pressionado
    event.preventDefault()
//    console.log(event)
//    console.log(`ETREI NA FUNÇA.`)
    inputSenha.setAttribute('type', 'password')
}

inputSenha.setAttribute('placeholder', 'digite sua senha')

// ALTERANDO A CLASSE DO FORM
const formulario = document.getElementsByTagName('form')[0]

console.log(formulario)

formulario.classList.remove('light')

formulario.classList.add('dark')