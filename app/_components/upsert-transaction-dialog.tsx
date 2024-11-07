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
}

export function UpsertTransactionDialog({
  isOpen,
  setIsOpen,
}: UpsertTransactionDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar transação</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <UpsertTransactionForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
