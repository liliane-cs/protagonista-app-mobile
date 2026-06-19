import { z } from "zod";

// Definição do schema do Zod focado em limpar e validar o filtro de busca
export const filtroSchema = z.object({
    termo: z.string()
    .default("")
    //O método transform pega o valor e o modifica antes de te devolver:
    .transform((val) => val.trim()//Remove espaços inúteis. 
    // Se o usuário digitar "  Yasmin  "
    //  o Zod limpa e transforma em "Yasmin". Isso evita que a busca falhe por causa de um espaço acidental.
    .toLowerCase()),// Remove espaços em branco e padroniza em minúsculo
});

// Tipo gerado automaticamente pelo Zod para o TypeScript
export type filtroSchemaInput = z.infer<typeof filtroSchema>;