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
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="titulo" className="h-8 w-auto rounded" />
      <Select defaultValue="all" onValueChange={onFilter}>
        <SelectTrigger className="h-8 w-[180px]">
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
