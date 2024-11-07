import { Transaction } from "@prisma/client";

export type CustomTransaction = Omit<Transaction, "amount"> & {
  amount: number;
};
