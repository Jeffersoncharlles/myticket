import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  fetchAllTickets,
  IFetchAllTickets,
  OrderStatus,
} from "@/services/fetch-all-tickets";
import { getTime } from "date-fns";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import TableFilter from "./components/table-filter";
import TableSkeleton from "./components/table-skeleton";
import TicketTableRow from "./components/ticket-table-row";
// import { updateAllTicketStatus } from "@/services/update-all-tickets-status";

export default function TicketPage() {
  const [tickets, setTickets] = useState<IFetchAllTickets[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableFilterStatusSelected, setTableStatusFilterSelected] = useState<
    OrderStatus | "all"
  >("all");

  const updateStatus = async (id: string, status: OrderStatus) => {
    // const result = await updateAllTicketStatus(id, status);
    // seria bom usar o react query para ter cache de update
    // e uma conexão com a api

    if (tickets) {
      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket.id === id
            ? {
                ...ticket,
                updated_at: getTime(Number(new Date()) / 1000).toString(),
                status,
              }
            : ticket,
        ),
      );
    }
  };

  const searchFilter = (search: string) => {
    console.log(search);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await fetchAllTickets(tableFilterStatusSelected);

      if (result) {
        setTickets(
          result.map((ticket) => ({
            ...ticket,
            status: ticket.status as OrderStatus,
          })),
        );
      }
      setIsLoading(false);
    })();
  }, [tableFilterStatusSelected]);

  return (
    <>
      <Helmet title="Tickets" />
      <section className="flex flex-col gap-4">
        <h1>Tickets</h1>
        <div className="">
          {/* Filters */}
          <TableFilter
            onFilter={setTableStatusFilterSelected}
            search={searchFilter}
          />
          <div className="w-full overflow-auto rounded-lg border border-zinc-200 shadow dark:border-zinc-800/80">
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
                {isLoading ? (
                  <TableSkeleton />
                ) : (
                  <>
                    {tickets.map((table) => (
                      <TicketTableRow
                        key={table.id}
                        items={table}
                        onUpdate={updateStatus}
                      />
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}
