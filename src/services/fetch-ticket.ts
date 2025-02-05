import { database } from "../lib/database";
export type OrderStatus = "open" | "closed" | "processing";

export interface IFetchTicket {
  id: string;
  title: string;
  status: OrderStatus;
  description: string;
  created_at: string;
  updated_at: string;
}

export const fetchTicket = async (id: string) => {
  const data = database.tickets;
  const details = database.comments;

  const ticket = data.filter((ticket) => ticket.id === id);

  const comments = details.filter((comment) => comment.ticketsId === id);

  const result = {
    ticket: {
      ...ticket,
      comments,
    },
  };

  return result;
};
