const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal_listatweets")




function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
    
}

tweetar.addEventListener('click', pegarTweet);

    let data    = new Date()
    let hora    = data.getHours()
    let minutos = data.getMinutes()

function criarTweet(tweetTexto) {
    const tweet = {
        nome: "Pedro Silva",
        foto: "./maratona-twitter-main/assets/img/ProfilePic.png",
        usuario: "@_pedrosilvaps",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){

    const {nome,foto,usuario,texto,tempo} = tweet

    let li   = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet") 
    let img  = document.createElement("img");
    img.src = foto  
    img.classList.add("tweet__fotoPerfil") 
    let div  = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2   = document.createElement("h2");
    h2.innerText = nome
    let spam = document.createElement("spam");
    spam.innerText = ` ${usuario} - ${tempo}`
    let p    = document.createElement("p");
    p.innerText = texto

    div.appendChild(h2)
    div.appendChild(spam)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)
    feed.appendChild(li)
}