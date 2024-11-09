import { isMatch } from "date-fns";
import { NavBar } from "../_components/navbar";
import { SummaryCards } from "./_components/summary-cards";
import { TimeSelect } from "./_components/time-select";
import { redirect } from "next/navigation";
import { getDashboard } from "../_data/get-dashboard";
import { TransactionPieChart } from "./_components/transaction-pie-chart";
import { ExpensesPerCategory } from "./_components/expenses-per-category";
import { LastTransactions } from "./_components/last-transaction";

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
    redirect("?month=01");
  }

  const dashboard = await getDashboard({
    month,
  });

  return (
    <>
      <NavBar />
      <main className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards {...dashboard} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
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
