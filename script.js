
// Primeira Fase
function iniciar () {
    var nome = document.getElementById("name").value
    var body = document.querySelector("body")

    body.innerHTML += `<p>Vamos lá.<br>
    Você, ${nome}, foi escolhido para achar a cura do Covid-19.<br>
    Mas averá obstáculos. e ai, está preparado?<br>`
    body.innerHTML += `<button onclick="primeiraSim()">Sim</button>
    <button onclick="primeiraNao()">Não</button>`
    
    
}

function primeiraNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `SEU FRACO, VOCÊ PERDEU!.<br>`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="location.reload()">Voltar</button>`
}

function primeiraSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Boa escolha!, quer começar fazendo o que?<br><br>`
    body.innerHTML += `<button onclick="irRua()">Ir na Rua</button><br><br>`
    body.innerHTML += `<button onclick="ficaCasa()">Ficar em Casa</button><br><br>`
    body.innerHTML += `<button onclick="noticia()">Ver as Notícias</button><br><br>`
}

function irRua(){
    var body = document.querySelector("body")
    body.innerHTML += `Escolha o lado que quer ir ! <br> `
    body.innerHTML += `<button onclick="direita()">Direita</button><br><br>`
    body.innerHTML += `<button onclick="esquerda()">Esquerda</button><br>`
}

function direita(){
    var body = document.querySelector("body")
    body.innerHTML += `VOCÊ ACHOU UMA ACLOMERAÇÃO DE PESSOAS E MORREU!!!! <br><br>`
    body.innerHTML +=  `<button onclick="location.reload()">Voltar</button>`
}

function esquerda(){
    var body = document.querySelector("body")
    body.innerHTML += `Você encontrou um alido para a pesquisa!!! <br><br>`
    body.innerHTML += `<button onclick="procuraLaboratorio()">SHOW!!!</button><br><br>`
}

function procuraLaboratorio(){
    var body = document.querySelector("body")
    body.innerHTML += `Você e seu aliado acham um laboratório com pesquisas da COVID-19 o que vocês fazem?<br><br>`
    body.innerHTML += `<button onclick="entraLaboratorio()">Entrar</button>`
    body.innerHTML += `<button onclick="laboratorio()">Não entrar</button><br><br>`
}

function entraLaboratorio(){
    var body = document.querySelector("body")
    body.innerHTML += `VOCÊS ACHAM A PESQUISA DO COVID E SALVAM O MUNDO<br><br>`
    body.innerHTML += `WIN WIN WIN WIN WIN WIN WIN!!!! <br><br>`
    body.innerHTML += `<button onclick="location.reload()">FIM</button>`
}

function laboratorio(){
    var body = document.querySelector("body")
    body.innerHTML += `VOCÊ É UM COVARDE E MEDROSO, POR CONTA DISSO TODOS MORRERAM!!!!<br><br>`
    body.innerHTML += `<button onclick="location.reload()">Voltar</button>`
}

// Segunda Fase
function ficaCasa () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Mas e ai ? vai ficar fazendo o que ? <br><br>`
    body.innerHTML += `<button onclick= "procrastina()">Procrastinar</button> <br><br>`
    body.innerHTML += `<button onclick= "primeiraSim()">Ver as Notícias</button> <br><br>`
}
function procrastina(){
    var body = document.querySelector("body")
    body.innerHTML += `Você é idiota ? A sua pesquisa iria salvar milhares de vidas!!!!`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}
function noticia(){
    var body = document.querySelector("body")
    body.innerHTML += `Você fica indignado com pesquisas!!!<br><br>`
    body.innerHTML += `<button onclick="irRua()">Ir para a rua achar pesquisas!</button><br><br>`
}