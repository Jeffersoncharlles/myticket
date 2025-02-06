import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { IFetchAllTickets } from "@/services/fetch-all-tickets";
import DetailsTicket from "./details-ticket";
import { OrderStatus, TableOrderStatus } from "./table-order-status";

interface ITicketTableRowProps {
  items: IFetchAllTickets;
  onUpdate: (id: string, status: OrderStatus) => Promise<void>;
}

export default function TicketTableRow({
  items,
  onUpdate,
}: ITicketTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const formatDistant = (date: string) => {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
  };

  const handleSelect = (value: OrderStatus) => {
    onUpdate(items.id, value);
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
        {formatDistant(new Date(Number(items.updated_at) * 1000).toString())}
      </TableCell>
      <TableCell>
        <Select
          defaultValue={items.status}
          onValueChange={handleSelect}
          disabled={["closed"].includes(items.status)}
        >
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Aberto</SelectItem>
            <SelectItem value="closed">Fechado</SelectItem>
            <SelectItem value="processing">Em Progresso</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>
    </TableRow>
  );
}
