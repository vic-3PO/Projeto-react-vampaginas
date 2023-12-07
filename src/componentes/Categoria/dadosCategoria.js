// componetens/categoria/dadosCategoria.js
import { useState, useEffect } from "react";

export function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Lista de categorias específicas que você quer incluir
    const categoriasEspecificas = [
      "Ficção",
      "Romance",
      "Mistério",
      "Ficção Científica",
      "Fantasia",
      "Aventura",
      "Conto",
      "Horror",
      "Ficção Histórica",

      "Não Ficção",
      "Biografia",
      "Autobiografia",
      "Ensaios",
      "História",
      "Ciência",
      "Política",
      "Filosofia",
      "Psicologia",

      "Poesia",
      "Poesia Contemporânea",
      "Poesia Clássica",
      "Poesia Épica",
      "Haicai",
      "Poesia Lírica",

      "Drama",
      "Peças Teatrais",
      "Tragédias",
      "Comédias",

      "Autoajuda",
      "Desenvolvimento Pessoal",
      "Motivação",
      "Autoaperfeiçoamento",

      "Religião e Espiritualidade",
      "Cristianismo",
      "Islamismo",
      "Judaísmo",
      "Budismo",
      "Hinduísmo",
      "Espiritualidade Neligiosa",

      "Livros Técnicos e Acadêmicos",
      "Ciência da Computação",
      "Medicina",
      "Direito",
      "Engenharia",
      "Matemática",

      "Infantil e Juvenil",
      "Livros Infantis",
      "Livros Juvenis",

      "Histórias em Quadrinhos e Graphic Novels",
      "Superóis",
      "Fantasia",
      "Drama",

      "Culinária",
      "Livros de Receitas",
      "Gastronomia",

      "Viagem",
      "Guias de Viagem",
      "Relatos de Viagem",

      "Arte e Fotografia",
      "História da Arte",
      "Técnicas de Pintura",
      "Fotografia",

      "Negócios e Economia",
      "Finanças Pessoais",
      "Empreendedorismo",
      "Economia Global",

      "Meio Ambiente e Sustentabilidade",
      "Ecologia",
      "Conservação",
      "Energias Renováveis",

      "Esportes e Lazer",
      "Biografias de Atletas",
      "História dos Esportes",
      "Guias de Treino",
    ];
    setCategorias(categoriasEspecificas);
  }, []);

  return categorias; // Retorne as categorias obtidas
}
