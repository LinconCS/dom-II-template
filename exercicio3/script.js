// const input = document.querySelector('input');
// const mensagem = document.querySelector('#mensagem');

// input.addEventListener('keydown', (event) => {
//   if (event.shiftKey) {
//     mensagem.textContent = 'ATENÇÃO: SEGURANDO SHIFT';
//   }
// });

// input.addEventListener('keyup', (event) => {
//   if (!event.shiftKey) {
//     mensagem.textContent = '';
//   }
// });

// EXERCÍCIO RESOLVIDO MAZZI

const input = document.getElementsByTagName('input')[0]

const paragrafo = document.getElementsByTagName('p')[0]

const checaCaps = (event) => {
    console.log(event)

    if(event.shiftKey){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    } else {
        paragrafo.innerHTML = ''
    }
}

