import { Input } from "./ui/input";

const TableFilter = () => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="titulo" className="h-8 w-auto rounded" />
    </div>
  );
};
export default TableFilter;
