import { database } from "../lib/database";
export type OrderStatus = "open" | "closed" | "processing";

export interface IFetchAllTickets {
  id: string;
  title: string;
  status: OrderStatus;
  description: string;
  created_at: string;
  updated_at: string;
}

export const fetchAllTickets = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const result = database.tickets;

  return result;
};
