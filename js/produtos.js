const titulos = document.querySelectorAll("div h1");
const categorias = document.querySelectorAll(".categoria");

for (let i = 0; i < titulos.length; i++) {
    const listaTitulos = titulos[i];
    titulos[i].addEventListener('click', function(event) {
        categorias[i].classList.toggle('hide-element')
    })       
}

