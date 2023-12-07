// dadosUltimosLancamentos.js
import axios from "axios";

const googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = process.env.REACT_APP_API_KEY;

export async function obterUltimosLancamentos() {
  try {
    const response = await axios.get(
      `${googleBooksApiUrl}?q=new+release&langRestrict=pt&key=${apiKey}`
    );

    // Verifique se a resposta possui a estrutura esperada
    if (response.data.items && Array.isArray(response.data.items)) {
      // Filtrar e obter todos os livros de domínio público
      const livrosDominioPublico = response.data.items
        .filter((item) => item.accessInfo?.publicDomain === true)
        .map((item) => ({
          key: item.id,
          nome: item.volumeInfo.title,
          src: item.volumeInfo.imageLinks.thumbnail,
        }));

      // Ordenar por data de publicação, do mais recente para o mais antigo
      livrosDominioPublico.sort(
        (a, b) =>
          new Date(b.volumeInfo.publishedDate) -
          new Date(a.volumeInfo.publishedDate)
      );

      // Obter no máximo 3 livros
      const livros = livrosDominioPublico.slice(0, 3).map((item) => {
        console.log("Livro adicionado aos últimos lançamentos:", item.nome);
        return item;
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
    console.error("Erro ao obter últimos lançamentos:", error.message);
    return [];
  }
}
