import { ListWithCards } from "@/types"
import { ListForm } from "./list-form"

type ListContainerProps = {
    boardId: string
    data: ListWithCards[]
}

export const ListContainer = ({
    boardId,
    data
}: ListContainerProps)=> {
    return (
        <ol>
            <ListForm />
            <div className="flex shrink-0 w-1" />
        </ol>
    )
}