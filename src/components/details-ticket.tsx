import { useEffect, useState } from "react";
import { fetchTicket } from "../services/fetch-ticket";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface DetailsTicketProps {
  ticketId: string;
  open: boolean;
}

const DetailsTicket = ({ ticketId, open }: DetailsTicketProps) => {
  const [ticketDetails, setTicketDetails] = useState({});

  useEffect(() => {
    (async () => {
      const result = await fetchTicket(ticketId);

      setTicketDetails(result);
    })();
  }, [open, ticketId]);

  console.log(ticketDetails);

  return (
    <DialogContent className="w-[300px] sm:w-[340px] md:w-full">
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};
export default DetailsTicket;
