import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { IFetchAllTickets } from "../services/fetch-all-tickets";
import DetailsTicket from "./details-ticket";
import { TableOrderStatus } from "./table-order-status";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { TableCell, TableRow } from "./ui/table";

interface ITicketTableRowProps {
  items: IFetchAllTickets;
}

export default function TicketTableRow({ items }: ITicketTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const formatDistant = (date: string) => {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
  };

  return (
    <TableRow>
      <TableCell>{items.id}</TableCell>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant={"ghost"}>{items.title}</Button>
          </DialogTrigger>
          {isDetailsOpen && (
            <DetailsTicket open={isDetailsOpen} ticketId={items.id} />
          )}
        </Dialog>
      </TableCell>
      <TableCell>
        <TableOrderStatus status={items.status} />
      </TableCell>
      <TableCell>
        {formatDistant(
          new Date(Number(items.updated_at) * 1000).toLocaleString(),
        )}
      </TableCell>
      <TableCell>{items.id}</TableCell>
    </TableRow>
  );
}
