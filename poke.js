let botao = document.querySelector('button')

let body = document.querySelector("body")

let foto = document.createElement("div")
body.appendChild(foto)

let oqueVaiAparecer = document.createElement("h3");
body.appendChild(oqueVaiAparecer);

let pedido = new XMLHttpRequest();




let contador = 1

botao.addEventListener("click", function(){

pedido.onreadystatechange = function( dados )
{
if ( this.status == 200 && this.readyState == 4 )
{
    var objetoJson = JSON.parse(this.responseText);
    console.log(objetoJson)
}
oqueVaiAparecer.innerHTML = `Nome: ${objetoJson.forms[0].name} #${contador - 1}`

foto.innerHTML = `<img src="${objetoJson.sprites.front_default}">`

}

pedido.open("GET", "https://pokeapi.co/api/v2/pokemon/" + contador);

pedido.send();

contador++

})
