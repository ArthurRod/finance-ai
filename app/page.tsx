import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <main className="space-y-6 p-6">
      <h1>Home page</h1>
      <UserButton showName />
    </main>
  );
}
