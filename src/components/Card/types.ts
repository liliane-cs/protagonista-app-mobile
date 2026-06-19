export type CardProps = {
  titulo: string;
  descricao?: string;
  imagem?: string;  
  favoritado?: boolean;
  aoFavoritar?: () => void;
  onPress?: () => void;
}
