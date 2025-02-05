import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 antialiased">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-8 pt-4 text-zinc-50">
        <Outlet />
      </main>
    </main>
  );
}
