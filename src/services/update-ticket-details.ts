import { getTime } from "date-fns";
import { database } from "../lib/database";
export type OrderStatus = "open" | "closed" | "processing";

interface IUpdateTicket {
  id: string;
  comment: string;
}

export const updateTicketDetails = async ({ id, comment }: IUpdateTicket) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const data = database.tickets;
  const details = database.comments;
  const users = database.users;

  const ticket = data.find((ticket) => ticket.id === id);
  const user = users.find((u) => u.id === id);
  if (!ticket?.id && user?.id) {
    return;
  }

  const comments = details.filter((comment) => comment.ticketsId === id);

  const created_at = getTime(Number(new Date()) / 1000).toString();

  comments.push({
    id: String(comments.length + 1),
    text: comment,
    ticketsId: id,
    created_at,
  });

  const result = {
    ticket: {
      ...ticket,
      user,
      comments,
    },
  };

  return result;
};
