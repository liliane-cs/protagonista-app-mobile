export interface FavoritoItem {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tipo: "curso" | "oportunidade" | "profissional";
}