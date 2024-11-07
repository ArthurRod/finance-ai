import { Badge } from "@/app/_components/ui/badge";
import { TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import { CustomTransaction } from "@/app/_types/CustomTransaction";

interface TransactionTypeBadge {
  transaction: CustomTransaction;
}

export function TransactionTypeBadge({ transaction }: TransactionTypeBadge) {
  switch (transaction.type) {
    case TransactionType.DEPOSIT:
      return (
        <Badge className="bg-primary/10 font-bold text-primary hover:bg-primary/10">
          <CircleIcon className="mr-2 fill-primary" size={10} />
          Depósito
        </Badge>
      );

    case TransactionType.EXPENSE:
      return (
        <Badge className="bg-danger/10 font-bold text-danger hover:bg-danger/10">
          <CircleIcon className="mr-2 fill-danger" size={10} />
          Despesa
        </Badge>
      );

    default:
      return (
        <Badge className="bg-white/10 font-bold text-white hover:bg-white/10">
          <CircleIcon className="mr-2 fill-white" size={10} />
          Investimento
        </Badge>
      );
  }
}
