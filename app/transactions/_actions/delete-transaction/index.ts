"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteTransactionInput } from "@/app/_schemas/delete-transaction-schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteTransaction = async ({
  transactionId,
}: DeleteTransactionInput) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.delete({
    where: {
      id: transactionId,
      userId,
    },
  });

  revalidatePath("/transactions");
  revalidatePath("/");
};
