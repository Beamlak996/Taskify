import { Separator } from "@/components/ui/separator"
import { Info } from "../_components/info"
import { ActivityList } from "./_components/activity-list"
import { Suspense } from "react"

const ActiviyPage = () => {
  return (
    <div className="w-full" >
        <Info />
        <Separator className="my-2" />
        <Suspense fallback={<ActivityList.Skeleton />} >
            <ActivityList />
        </Suspense>
    </div>
  )
}

export default ActiviyPage