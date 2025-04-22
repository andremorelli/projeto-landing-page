var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita(){
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"

}
function RolarParaEsquerda(){
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"

}