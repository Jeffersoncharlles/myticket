import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import { useDebounce } from "@uidotdev/usehooks";
import TicketTableRow from "../../components/ticket-table-row";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  fetchAllTickets,
  IFetchAllTickets,
} from "../../services/fetch-all-tickets";

export default function TicketPage() {
  const [tickets, setTickets] = useState<IFetchAllTickets[]>([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [isSearching, setIsSearching] = useState(false);
  // const debouncedSearchTerm = useDebounce(searchTerm, 300);
  // const [sortStatusOrder, setSortStatusOrder] = useState();

  // const handleHeaderSort = (header:string) => {

  // }

  useEffect(() => {
    (async () => {
      const result = await fetchAllTickets();

      setTickets([...result]);
    })();
  }, []);

  return (
    <>
      <Helmet title="Tickets" />
      <section className="flex flex-col gap-4">
        <h1>Tickets</h1>
        <div>
          {/* Filters */}
          <div>
            {/* Table */}
            <Table className="text-zinc-200">
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Titulo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Atualização</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((table) => (
                  <TicketTableRow key={table.id} items={table} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}
