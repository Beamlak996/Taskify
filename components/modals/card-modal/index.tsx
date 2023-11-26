"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useCardModal } from "@/hooks/use-card-modal"
import { fetcher } from "@/lib/fetcher"
import { CardWithList } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Header } from "./header"
import { Description } from "./description"
import { Actions } from "./actions"

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
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4" >
            <div className="col-span-3" >
              <div className="w-full space-y-6" >
                {
                  !cardData ? (
                    <Description.Skeleton />
                  ) : (
                    <Description data={cardData} />
                  ) 
                }
              </div>
            </div>  
            {
              !cardData ? (
                <Actions.Skeleton />
              ) : (
                <Actions data={cardData} />
              ) 
            }
          </div>
        </DialogContent>
      </Dialog>
    );
}