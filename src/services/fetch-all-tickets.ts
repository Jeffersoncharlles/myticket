import { database } from "../lib/database";
export type OrderStatus = "open" | "closed" | "processing";

export interface IFetchAllTickets {
  id: string;
  title: string;
  status: "open" | "closed" | "processing" | "all";
  description: string;
  created_at: string;
  updated_at: string;
}

type IFetchAllTicketsProps = OrderStatus | "all";

export const fetchAllTickets = async (filter: IFetchAllTicketsProps) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const result = database.tickets;

  if (filter !== "all") {
    const filters = result.filter((ticket) => ticket.status === filter);
    return filters;
  }

  return result;
};
