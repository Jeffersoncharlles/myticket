import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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

  useEffect(() => {
    (async () => {
      const result = await fetchAllTickets();

      setTickets(result);
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{tickets && <TicketTableRow />}</TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}
