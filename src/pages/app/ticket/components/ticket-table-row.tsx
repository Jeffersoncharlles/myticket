import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Dialog, DialogTrigger } from "../../../../components/ui/dialog";
import { TableCell, TableRow } from "../../../../components/ui/table";
import { IFetchAllTickets } from "../../../../services/fetch-all-tickets";
import DetailsTicket from "./details-ticket";
import { TableOrderStatus } from "./table-order-status";

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
    <TableRow className="">
      <TableCell>{items.id}</TableCell>
      <TableCell className="md:w-fit">
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              className="leading-tight md:text-ellipsis"
              disabled={isDetailsOpen}
            >
              <span className="truncate"> {items.title}</span>
            </Button>
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
      {/* <TableCell>
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="open">Aberto</SelectItem>
            <SelectItem value="canceled">Fechado</SelectItem>
            <SelectItem value="processing">Em Progresso</SelectItem>
          </SelectContent>
        </Select>
      </TableCell> */}
    </TableRow>
  );
}
