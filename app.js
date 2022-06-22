
//declarar os inputs e outputs 
let seletorRegiao = document.querySelector(".selecaoRegiao select")

//ouvir evento de change 
seletorRegiao.addEventListener( "change", ouvirChange)

//função de mostrar e esconder os conteúdos do output de acordo com a seleção
function ouvirChange() { 
   let regiaoSelecionada= seletorRegiao.value
   //este let "natural" se refere ao um seletor que ainda será criado para a versão final deste projeto, que pretende separar os locais em "patrimonio natural/cultural"
   let patrimonioSelecionado= 'natural'
   let output=document.querySelector("[data-texto-regiao ='" + regiaoSelecionada + "-" + patrimonioSelecionado +"']") 
   //(anotação para simplificar a linha de código anterior) $ = sintax para substituir na stringe  o valor que estiver dentro do {} ex: `[data-texto-regiao="${regiaoSelecionada}"]`
       output.style.display="block"
      console.log("[data-texto-regiao ='" + regiaoSelecionada +"']" )
}      


//Criar função para alterar o estado do popup
function alterarPopup() { 
    //pega o elemento da classe popup1 e cria uma classe ativa
    document.getElementById("popup-1").classList.toggle("ativa");
     }


