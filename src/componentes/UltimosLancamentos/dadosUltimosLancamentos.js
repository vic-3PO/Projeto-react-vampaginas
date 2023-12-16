// dadosUltimosLancamentos.js
import axios from "axios";

const googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = process.env.REACT_APP_API_KEY;

export async function obterUltimosLancamentos() {
  try {
    const response = await axios.get(
      `${googleBooksApiUrl}?q=new+release&langRestrict=pt&key=${apiKey}`
    );

    if (response.data.items && Array.isArray(response.data.items)) {
      const livrosDominioPublico = response.data.items
        .filter((item) => item.accessInfo?.publicDomain === true)
        .map((item) => ({
          key: item.id,
          nome: item.volumeInfo.title,
          src: item.volumeInfo.imageLinks.thumbnail,
        }));
      livrosDominioPublico.sort(
        (a, b) =>
          new Date(b.volumeInfo.publishedDate) -
          new Date(a.volumeInfo.publishedDate)
      );
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
