"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TransactionTypeBadge } from "./transaction-type-badge";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/transaction";
import { EditTransactionButton } from "./edit-transaction-button";
import { CustomTransaction } from "@/app/_types/CustomTransaction";
import { getDayMonthYear } from "@/app/_utils/day-month-year";
import { formatCurrency } from "@/app/_utils/currency";
import { DeleteTransactionButton } from "./delete-transaction-button";

export const transactionTableColumns: ColumnDef<CustomTransaction>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      formatCurrency(Number(transaction.amount)),
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      getDayMonthYear(transaction.date),
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => {
      return (
        <>
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton transactionId={transaction.id} />
        </>
      );
    },
  },
];
