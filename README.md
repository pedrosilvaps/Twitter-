# Twitter-
Fiz um "Twitter" para surpreender meus professores e colegas 



<!DOCTYPE html>
<html lang="pt-br">
    
    <!-- CONFIGURAÇÕES -->
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./assets/css/reset.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Ken-Te-Vi</title>
    </head>

    <!-- CORPO -->
    <body>
        
        <div class="container">

            <!-- CABEÇALHO -->
            <header class="cabecalho">

                <!-- IMAGEM LOGO -->
                <figure class="cabecalho__logo">
                    <img src="./assets/img/bird 1.svg" alt="Logo Ken-Te-Vi"> 
                    <figcaption hidden>Logo Ken-Te-Vi</figcaption> 
                </figure>

                <!-- MENU DE NAVEGAÇÃO -->
                <nav class="cabecalho__menuNavegacao">

                    <!-- LISTA DE LINKS -->
                    <ul class="cabecalho__menuLista">

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Home.png" alt="Página Inicial">
                            <a href="">Página Inicial</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Hashtag.png" alt="Explorar">
                            <a href="">Explorar</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Notification.png" alt="Notificações">
                            <a href="">Notificações</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Group.png" alt="Mensagens">
                            <a href="">Mensagens</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Group (1).png" alt="Itens salvos">
                            <a href="">Itens salvos</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Group (2).png" alt="Listas">
                            <a href="">Listas</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/ProfilePic.png" alt="Perfil">
                            <a href="">Perfil</a>
                        </li>

                        <li class="cabecalho__menuItem"> 
                            <img src="./assets/img/Group (3).png" alt="Mais">
                            <a href="">Mais</a>
                        </li>
                    </ul>

                </nav>

            </header>

            <!-- CONTEÚDO PRINCIPAL -->
            <main class="conteudoPrincipal">
                
                <!-- TÍTULO -->
                <h3 class="conteudoPrincipal__titulo">Home</h3>
                
                <!-- FORMULÁRIO -->
                <form action="#" class="conteudoPrincipal__formulario">
                    <textarea name="textoTweet" placeholder="O que está acontecendo?" ></textarea>
                
                    <button type="submit">Tweetar</button>
                </form>

                <!-- FEED DE NOTÍCIAS -->
                <section class="conteudoPrincipal__feed">
                    
                    <!-- LISTA DE NOTÍCIAS -->
                    <ul class="conteudoPrincipal__listaTweets">
                        <!-- NOTÍCIA -->
                        <li class="conteudoPrincipal__tweet">
                            <!-- IMAGEM DO USUÁRIO -->
                            <img class="tweet__fotoPerfil" src="./assets/img/ProfilePic (2).png" alt="Daniel">

                            <!-- CAIXA COM INFORAMÇÕES DO USUÁRIO -->
                            <div class="tweet__conteudo">
                                <h2>Hudson Carolino</h2>
                                <span>@hudsoncarolino 14s</span>
                                <p>Olá a todos e todas, é uma honra usar o twitter do amigo Pedro!!!
                                </p>
                            </div>

                        </li>
                        <!-- NOTÍCIA -->
                        <li class="conteudoPrincipal__tweet">
                            <!-- IMAGEM DO USUÁRIO -->
                            <img class="tweet__fotoPerfil" src="./assets/img/ProfilePic (1).png" alt="Daniel">

                            <!-- CAIXA COM INFORAMÇÕES DO USUÁRIO -->
                            <div class="tweet__conteudo">
                                <h2>Maria Porcina</h2>
                                <span>@mariap.na 14s</span>
                                <p>Este é um tweet. Pode ser longo ou curto. Depende do que você tem a dizer. Ele pode ter algumas hashtags também. #likethis </p>
                            </div>

                        </li>
                        <!-- NOTÍCIA -->
                        <li class="conteudoPrincipal__tweet">
                            <!-- IMAGEM DO USUÁRIO -->
                            <img class="tweet__fotoPerfil" src="./assets/img/ProfilePic.png" alt="Pedro Silva">

                            <!-- CAIXA COM INFORAMÇÕES DO USUÁRIO -->
                            <div class="tweet__conteudo">
                                <h2>Pedro Silva</h2>
                                <span>@_pedrosilvaps 14s</span>
                                <p>Olha o nosso Twitter!!! 
                                </p>
                            </div>

                        </li>
                    </ul>

                </section>

            </main>

        </div>

        <script type="text/javascript" src="./assets/js/script.js"></script>

    </body>

</html>
