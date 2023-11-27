import { ACTION, AuditLog } from "@prisma/client";


export const generateLogMessage = (log: AuditLog) => {
    const { action, entityTitle, entityType } = log

    switch(action) {
        case ACTION.CREATE:
            return `created a ${entityType.toLowerCase()} "${entityTitle}"`
        case ACTION.UPDATE:
            return `updated a ${entityType.toLowerCase()} "${entityTitle}"`
        case ACTION.DELETE:
            return `deleted a ${entityType.toLowerCase()} "${entityTitle}"`
        default:
            return `unknow action on ${entityType.toLowerCase()} "${entityTitle}"`;
    }
}