import {z} from 'zod';

export const loginSchema = z.object({
  user: z.string().min(3, 'Nome de usuário muito curto'),
  password: z
    .string()
    .min(3, 'Senha muito curta')
});

export type LoginSchema = z.infer<typeof loginSchema>;
