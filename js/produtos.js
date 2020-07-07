// TOGGLE DOS ITENS DA PÁGINA DE PRODUTOS
const titulos = document.querySelectorAll(".tipo-produto h1");
const categorias = document.querySelectorAll(".tipo-produto span");

 
for (let i = 0; i < titulos.length; i++) {
    titulos[i].addEventListener('click', () => { categorias[i].classList.toggle('hide-element')
    categorias[i].classList.add('show-element')} )       
} 



// CRIANDO ELEMENTOS COM JS
// function createAppend(append1, append2, texto) {
//     let first = document.createElement(append2);
//     let seccond = document.createElement(append1);

//     seccond.textContent = texto;
//     first.appendChild(seccond);

//     console.log(first);
// }

// console.log(createAppend(`div`, `h1`, `texto Teste`));

// !=OPÇÃO PARA ADICIONAR E REMOVER CLASSES DISTINTAS AOS MESMOS ELEMENTOS





