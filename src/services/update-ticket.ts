// import { database } from "../lib/database";
export type OrderStatus = "open" | "closed" | "processing";

export const fetchTicket = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  // const data = database.tickets;
};
