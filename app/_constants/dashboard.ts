import { TransactionPaymentMethod } from "@prisma/client";

export const MONTH_OPTIONS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};
