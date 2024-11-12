import { z } from "zod";

export const DeleteTransactionSchema = z.object({
  transactionId: z.string().uuid(),
});

export type DeleteTransactionInput = z.infer<typeof DeleteTransactionSchema>;
