"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useCardModal } from "@/hooks/use-card-modal"
import { fetcher } from "@/lib/fetcher"
import { CardWithList } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Header } from "./header"

export const CardModal = ()=> {
    const cardModal = useCardModal()

    const { data: cardData } = useQuery<CardWithList>({
        queryKey: ["card", cardModal.id],
        queryFn: () => fetcher(`/api/cards/${cardModal.id}`) 
    })

    return (
      <Dialog open={cardModal.isOpen} onOpenChange={cardModal.onClose}>
        <DialogContent>
          {!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
        </DialogContent>
      </Dialog>
    );
}