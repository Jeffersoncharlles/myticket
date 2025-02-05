export type OrderStatus = "open" | "closed" | "processing";

export interface TableOrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  open: "Aberto",
  closed: "Fechado",
  processing: "Em Progresso",
};

export function TableOrderStatus({ status }: TableOrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "open" && (
        <span
          data-testid="badge"
          className="h-3 w-3 rounded-full bg-lime-600"
        />
      )}
      {status === "closed" && (
        <span
          data-testid="badge"
          className="h-3 w-3 rounded-full bg-rose-500"
        />
      )}
      {["processing"].includes(status) && (
        <span
          data-testid="badge"
          className="h-3 w-3 rounded-full bg-amber-400"
        />
      )}

      <span className="font-medium text-zinc-400">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
