import { database } from "../lib/database";

export interface IFetchAllTickets {
  id: string;
  title: string;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const fetchAllTickets = async () => {
  const result = database.tickets;

  return result;
};
