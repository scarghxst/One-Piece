/* Quando eu clicar no botão que conrresponder a bandeira do personagem tem que aparecer o personagem e a descrição*/


const botoes = document.querySelectorAll('.botao');

const pirata = document.querySelectorAll('.pirata')

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        
        const botaoselecionado = document.querySelector(".botao.selecionado");
        
        botaoselecionado.classList.remove("selecionado")
       
        botao.classList.add("selecionado");
        
        const pirataselecionado = document.querySelector(".pirata.selecionado")

        pirataselecionado.classList.remove("selecionado")
        
        pirata[indice].classList.add("selecionado")

       
       
        
    })

})








