/*
// Example usage
fetch(URL, options)
    .then(response => response.json())
    .then(json => console.log(json))

// A função fetch() retorna uma Promise que resolve para a resposta da requisição.


// Exenplo de GET
fetch('https://jsonplaceholder.typicode.com/', {
    method: 'GET',
    cache: 'no-cache'
})
    .then(response => response.json())
    .then(json => console.log(json))


// Exemplo de POST
fetch('https://jsonplaceholder.typicode.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)

})
    .then(response => response.json())
    .then(json => console.log(json))


--------------------------------------------------------------------------------------------------------------------------

    Atividade: API "catAPI"
    Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.
    
    Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
    Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

---------------------------------------------------------------------------------------------------------------------------
*/

