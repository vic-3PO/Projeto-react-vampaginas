// dadosPesquisa.js
import axios from "axios";

const googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = process.env.REACT_APP_API_KEY;

export async function realizarPesquisaLivros(query) {
  try {
    const response = await axios.get(
      `${googleBooksApiUrl}?q=${query}&maxResults=40&key=${apiKey}&filter=free-ebooks`
    );

    // Verifique se a resposta possui a estrutura esperada
    if (response.data.items && Array.isArray(response.data.items)) {
      const livros = response.data.items
        .filter((item) => item.accessInfo?.publicDomain === true)
        .map((item) => {
          // Adicione verificações para propriedades
          const nome = item.volumeInfo.title || "Nome não disponível";
          const src =
            item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
              ? item.volumeInfo.imageLinks.thumbnail
              : "Imagem não disponível";
          const autor =
            item.volumeInfo.authors && item.volumeInfo.authors.length > 0
              ? item.volumeInfo.authors.join(", ")
              : "Autor não disponível";

          return {
            key: item.id, // Adicione uma propriedade de chave única
            nome,
            src,
            autor,
          };
        });

      return livros;
    } else {
      console.error(
        "Resposta da API não possui a estrutura esperada:",
        response.data
      );
      return [];
    }
  } catch (error) {
    console.error("Erro ao realizar pesquisa de livros:", error.message);
    return [];
  }
}
