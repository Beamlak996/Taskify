import { z } from "zod"

export const CreateList = z.object({
    boardId: z.string(),
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title is required"
    }).min(1, {
        message: "Title is too short"
    })
}) 