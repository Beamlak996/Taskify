import { auth, currentUser } from "@clerk/nextjs"
import { ENTITY_TYPE, ACTION } from "@prisma/client";
import { db } from "./db"


type Props = {
    entityId: string
    entityType: ENTITY_TYPE
    entityTitle: string
    action: ACTION
}

export const createAuditLog = async ({
    entityId,
    entityType,
    entityTitle,
    action
}: Props) => {
    try {
        const { orgId } = auth()
        const user = await currentUser()

        if(!user || !orgId) {
            throw new Error("User not found!")
        }

        await db.auditLog.create({
            data: {
                orgId,
                entityId,
                entityTitle,
                entityType,
                action,
                userId: user.id,
                userName: user?.firstName + " " + user?.lastName,
                userImage: user?.imageUrl,
            }
        })

    } catch (error) {
        console.log("[AUDIT_LOG_ERROR]", error)
    }
}