import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IFetchAllTickets } from "../services/fetch-all-tickets";
import { TableOrderStatus } from "./table-order-status";
import { TableCell, TableRow } from "./ui/table";

interface ITicketTableRowProps {
  items: IFetchAllTickets;
}

export default function TicketTableRow({ items }: ITicketTableRowProps) {
  const formatDistant = (date: string) => {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
  };

  return (
    <TableRow>
      <TableCell>{items.id}</TableCell>
      <TableCell>{items.title}</TableCell>
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
