import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionTableColumns } from "./_components/transaction-table-columns";
import { AddTransactionButton } from "../_components/add-transaction-button";
import { NavBar } from "../_components/navbar";
import { ScrollArea } from "../_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import { auth } from "@clerk/nextjs/server";

export default async function TransactionsPage() {
  const { userId } = await auth();
  const userCanAddTransaction = await canUserAddTransaction();

  const transactions = await db.transaction.findMany({
    where: {
      userId: userId!,
    },
    orderBy: {
      date: "desc",
    },
  });

  return (
    <>
      <NavBar />
      <main className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <ScrollArea>
          <DataTable
            columns={transactionTableColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </main>
    </>
  );
}
