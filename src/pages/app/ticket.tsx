import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import { useDebounce } from "@uidotdev/usehooks";
import TableFilter from "../../components/table-filter";
import TableSkeleton from "../../components/table-skeleton";
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
  const [isLoading, setIsLoading] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [isSearching, setIsSearching] = useState(false);
  // const debouncedSearchTerm = useDebounce(searchTerm, 300);
  // const [sortStatusOrder, setSortStatusOrder] = useState();

  // const handleHeaderSort = (header:string) => {

  // }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await fetchAllTickets();

      setTickets([...result]);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Helmet title="Tickets" />
      <section className="flex flex-col gap-4">
        <h1>Tickets</h1>
        <div className="">
          {/* Filters */}
          <TableFilter />
          <div className="w-full overflow-auto rounded-lg border border-zinc-200 shadow dark:border-gray-800">
            {/* Table */}
            <Table className="text-zinc-200">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead className="">Titulo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Atualização</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading && <TableSkeleton />}
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
