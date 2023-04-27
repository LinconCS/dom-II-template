// const insereItem = (event) => {
//     event.preventDefault();
//     const novoItem = document.getElementById("meu-input").value;
//     if (novoItem !== "") {
//       const lista = document.getElementById("lista");
//       lista.insertAdjacentHTML("beforeend", `<li>${novoItem}</li>`);
//       document.getElementById("meu-input").value = "";
//     }
//   }

// Outra forma

const lista = document.getElementById('lista')
const input = document.getElementById('meu-input')

const insereItem = (event) => {
  event.preventDefault()
  
  const adicionaFruta = document.createElement ('li')
  
  adicionaFruta.innerHTML = input.value

  // lista.insertAdjacentElement('beforeend', adicionaFruta)

  lista.appendChild(adicionaFruta)

  input.value = ''
}