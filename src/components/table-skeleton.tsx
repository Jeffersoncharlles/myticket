import { Skeleton } from "./ui/skeleton";
import { TableCell, TableRow } from "./ui/table";

const TableSkeleton = () => {
  return Array.from({ length: 10 }).map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
    </TableRow>
  ));
};
export default TableSkeleton;
