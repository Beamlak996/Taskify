import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

type HintProps = {
    children: React.ReactNode
    description: string
    side?: "left" | "right" | "top" | "bottom"
    sideOffset?: number
}

export const Hint = ({
    children,
    description,
    side = "bottom",
    sideOffset=0
}: HintProps)=> {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={20} >
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={sideOffset}
                  side={side}
                  className="text-xs max-w-[220px] break-words"
                >
                    {description}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}