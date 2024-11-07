"use server";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { UpsertTransactionSchema } from "../_schemas/upsert-transaction-schema";
import { auth } from "@clerk/nextjs/server";
import { db } from "../_lib/prisma";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  UpsertTransactionSchema.parse(params);

  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.upsert({
    where: {
      id: params.id || "",
    },
    update: { ...params, userId },
    create: { ...params, userId },
  });

  revalidatePath("/transactions");
};
