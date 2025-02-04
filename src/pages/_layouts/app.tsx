import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col antialiased">
      <div className="flex flex-1 flex-col gap-4 p-8 pt-4">
        <Outlet />
      </div>
    </main>
  );
}
