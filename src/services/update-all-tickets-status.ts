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

export const updateAllTicketStatus = async (
  id: string,
  newStatus: OrderStatus,
) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const result = database.tickets;

  const updateResult = result.map((item) =>
    item.id === id
      ? {
          ...item,
          status: newStatus,
        }
      : item,
  );

  return updateResult;
};
