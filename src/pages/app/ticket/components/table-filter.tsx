import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderStatus } from "./table-order-status";

interface ITableFilter {
  onFilter: (filter: OrderStatus | "all") => void;
}

const TableFilter = ({ onFilter }: ITableFilter) => {
  return (
    <div className="mb-6 flex flex-col items-center gap-2 sm:flex-row">
      <span className="text-sm font-semibold text-zinc-200">Filtros:</span>
      <Input
        placeholder="titulo"
        className="h-8 w-auto rounded bg-zinc-950 placeholder:text-zinc-500"
      />
      <Select defaultValue="all" onValueChange={onFilter}>
        <SelectTrigger className="h-8 w-[180px] text-zinc-100">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="open">Aberto</SelectItem>
          <SelectItem value="closed">Fechado</SelectItem>
          <SelectItem value="processing">Em Progresso</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
export default TableFilter;
