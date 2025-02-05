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
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const data = database.tickets;
  const details = database.comments;
  const users = database.users;

  const ticket = data.filter((ticket) => ticket.id === id);

  const comments = details.filter((comment) => comment.ticketsId === id);
  const user = users.find((u) => u.id === id);

  const result = {
    ticket: {
      ...ticket,
      user,
      comments,
    },
  };

  return result;
};
