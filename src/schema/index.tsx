import { z } from "zod";

export const filtroSchema = z.object({
    termo: z.string()
    .default("")
    .transform((val) => val.trim() 
     .toLowerCase()),
});

export type filtroSchemaInput = z.infer<typeof filtroSchema>;
