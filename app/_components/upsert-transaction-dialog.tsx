import { CustomTransaction } from "../_types/CustomTransaction";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { UpsertTransactionForm } from "./upsert-transaction-form";

interface UpsertTransactionDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  transactionId?: string;
  defaultValues?: CustomTransaction;
}

export function UpsertTransactionDialog({
  isOpen,
  setIsOpen,
  transactionId,
  defaultValues,
}: UpsertTransactionDialogProps) {
  const isUpdate = Boolean(transactionId);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isUpdate ? "Atualizar" : "Criar"} transação
          </DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <UpsertTransactionForm
          setIsOpen={setIsOpen}
          isUpdate={isUpdate}
          transactionId={transactionId}
          defaultValues={defaultValues}
        />
      </DialogContent>
    </Dialog>
  );
}
