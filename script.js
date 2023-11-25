function validarNoticia(noticiaEntrada) {
    var NoticiaEntrada = noticiaEntrada.UrlNoticia;
    var Token = noticiaEntrada.Token;

    if (Token === "8nVYZziWtJa4hg") {
        switch (NoticiaEntrada) {
            case "https://noticias.caracoltv.com/colombia/en-santander-murio-otra-mujer-atacada-por-preso-durante-visita-a-carcel-rg10":
                return {"message": "Verdadero. Ambas frases son idénticas y expresan la misma idea principal. Ambas hablan sobre un criminal que es el esposo de alguien, y este criminal está detenido en la prisión de Palogordo en Santander. Además, mencionan que una niña de 16 años ha perdido a su madre y que el padre enfrentará una condena por feminicidio agravado. "};
            case "https://noticias.caracoltv.com/caribe/prendieron-fuego-en-sede-de-la-registraduria-de-manaure-dos-militares-resultaron-heridos-rg10":
                return {"message": "Verdadero. Un grupo de personas atacó la sede de la Registraduría en Manaure, La Guajira, y la incendió. Dos militares resultaron heridos."};
            case "https://www.elmundotoday.com/2023/10/la-princesa-leonor-dona-60-millones-de-euros-a-corinna-larsen-demostrando-que-ya-esta-lista-para-reinar/":
                return {"message": "Falso. La princesa Leonor dona 60 millones de euros a Corinna Larsen."};
            // Agrega más casos según sea necesario para otras noticias.
            default:
                return {"message": "No fue posible validar noticia"};
        }
    } else {
        return {"message": "Clave API incorrecta"};
    }
}

function consultarAPI() {
    var url = document.getElementById('urlInput').value;
    var token = document.getElementById('tokenInput').value;
    var resultDiv = document.getElementById('result');
    var historyList = document.getElementById('historyList');

    // Construir el objeto JSON con la estructura proporcionada
    var jsonData = {
        "UrlNoticia": url,
        "Token": token
    };

    // Validar la noticia usando la función validarNoticia
    var resultado = validarNoticia(jsonData);

    // Mostrar la respuesta en el elemento resultDiv
    resultDiv.innerHTML = '<h2>Respuesta de la Consulta:</h2><p>' + resultado.message + '</p>';

    // Agregar la consulta al historial
    var listItem = document.createElement('li');
    listItem.textContent = 'URL: ' + url + ', Token: ' + token;
    historyList.appendChild(listItem);
}
