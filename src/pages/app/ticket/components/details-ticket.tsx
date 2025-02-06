import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchTicket, IFechtTicketResponse } from "@/services/fetch-ticket";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface DetailsTicketProps {
  ticketId: string;
  open: boolean;
}

const DetailsTicket = ({ ticketId, open }: DetailsTicketProps) => {
  const [ticketDetails, setTicketDetails] = useState<
    IFechtTicketResponse | undefined
  >();

  useEffect(() => {
    (async () => {
      const result = await fetchTicket(ticketId);

      if (result?.ticket.id !== undefined) {
        setTicketDetails(result as IFechtTicketResponse);
      }
    })();
  }, [open, ticketId]);

  const formatDistant = (date: string) => {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
  };

  const handleCommentText = () => {};

  return (
    <>
      {ticketDetails && (
        <DialogContent className="w-[300px] text-zinc-100 sm:w-[340px] md:w-full">
          <DialogHeader>
            <DialogTitle className="">
              {ticketDetails?.ticket.title}
            </DialogTitle>
            <DialogDescription className="py-2 text-zinc-400 md:py-6">
              {ticketDetails?.ticket.description}
            </DialogDescription>
            <div className="flex justify-between">
              <p className="text-xs text-zinc-200">
                {ticketDetails?.ticket.user?.name}
              </p>
              <p className="text-xs text-zinc-400">
                {formatDistant(
                  new Date(
                    Number(ticketDetails?.ticket.created_at) * 1000,
                  ).toLocaleString(),
                )}
              </p>
            </div>
          </DialogHeader>
          <div>
            {/* comments */}
            {ticketDetails.ticket.comments.map((comment) => (
              <div key={comment.id} className="flex flex-col py-2 md:p-2">
                <div className="flex flex-col justify-between text-xs">
                  <p className="w-full overflow-hidden">{comment.text}</p>
                  <span className="text-zinc-600">
                    {formatDistant(
                      new Date(
                        Number(comment.created_at) * 1000,
                      ).toLocaleString(),
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <textarea className="h-36 w-full resize-none border border-zinc-600 bg-transparent" />
            <Button variant={"secondary"} onClick={() => handleCommentText}>
              comentar
            </Button>
          </div>
        </DialogContent>
      )}
    </>
  );
};
export default DetailsTicket;
