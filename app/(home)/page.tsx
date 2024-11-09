import { NavBar } from "../_components/navbar";
import { SummaryCards } from "./_components/summary-cards";

export default async function HomePage() {
  return (
    <>
      <NavBar />
      <main className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards />
          </div>
        </div>
      </main>
    </>
  );
}
