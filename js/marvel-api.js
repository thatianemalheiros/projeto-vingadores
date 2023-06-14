$(document).ready(function() {
    // Configurações da API da Marvel
    const publicKey = 'bffbfe25308f62b01a00c6aae78669b0';
    const apiUrl = 'developer.marvel.com';
    const limit = 4;
  
    // Função para obter os últimos quadrinhos da Marvel
    function getMarvelComics() {
      $.ajax({
        url: apiUrl,
        data: {
          apikey: publicKey,
          limit: limit,
          orderBy: '-modified'
        },
        success: function(response) {
          displayMarvelComics(response.data.results);
        },
        error: function() {
          console.log('Erro ao obter os quadrinhos da Marvel.');
        }
      });
    }
  
    // Função para exibir os quadrinhos da Marvel na página
    function displayMarvelComics(comics) {
      const container = $('#marvel-comics');
      container.empty();
  
      comics.forEach(function(comic) {
        const comicContainer = $('<div>').addClass('comic');
        const comicImage = $('<img>').attr('src', comic.thumbnail.path + '.' + comic.thumbnail.extension);
        const comicTitle = $('<h3>').text(comic.title);
  
        comicContainer.append(comicImage, comicTitle);
        container.append(comicContainer);
      });
    }
  
    // Chamada da função para obter os quadrinhos da Marvel ao carregar a página
    getMarvelComics();
  });
  