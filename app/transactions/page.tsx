import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionTableColumns } from "./_components/transaction-table-columns";
import { AddTransactionButton } from "../_components/add-transaction-button";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});

  return (
    <main className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionTableColumns} data={transactions} />
    </main>
  );
}
