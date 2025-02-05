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
  const result = database.tickets;

  return result;
};
