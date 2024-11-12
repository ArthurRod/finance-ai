import { isMatch } from "date-fns";
import { NavBar } from "../_components/navbar";
import { SummaryCards } from "./_components/summary-cards";
import { TimeSelect } from "./_components/time-select";
import { redirect } from "next/navigation";
import { getDashboard } from "../_data/get-dashboard";
import { TransactionPieChart } from "./_components/transaction-pie-chart";
import { ExpensesPerCategory } from "./_components/expenses-per-category";
import { LastTransactions } from "./_components/last-transaction";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import { AiReportButton } from "./_components/ai-report-button";

interface HomePageProps {
  searchParams: {
    month: string;
  };
}

export default async function HomePage({
  searchParams: { month },
}: HomePageProps) {
  const monthIsValid = month && isMatch(month, "MM");

  if (!monthIsValid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await getDashboard({
    month,
  });
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      <NavBar />
      <main className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <AiReportButton month={month} />
            <TimeSelect />
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards
              {...dashboard}
              userCanAddTransaction={userCanAddTransaction}
            />
            <div className="grid grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </main>
    </>
  );
}
