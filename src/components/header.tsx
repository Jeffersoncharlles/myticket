import { Separator } from "@radix-ui/react-separator";
import { Home, MailOpen } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="border-b border-zinc-800">
      <div className="flex h-16 items-center gap-6 px-6">
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 text-zinc-200 lg:space-x-6">
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-zinc-400 data-[active=true]:text-zinc-400"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </a>
          <a
            className="flex items-center gap-1.5 text-sm font-medium hover:text-zinc-400 data-[active=true]:text-zinc-400"
            href="/ticket"
          >
            <MailOpen className="h-4 w-4" />
            Ticket
          </a>
        </nav>
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};
export default Header;
