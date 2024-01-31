const botao = document.querySelector(".btn-plataforma");
console.log(botao)
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    //const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
    elementoPlataformas.classList.toggle("ativo"); //toggle verifica se esta ativo ou não e alterna entre eles
    // if(botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    // }else{
    //     elementoPlataformas.classList.add("ativo");
    // }
});