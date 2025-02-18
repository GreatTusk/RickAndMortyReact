import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const CharacterCardSkeleton = () => {
  return (
    <Card className="w-64 overflow-hidden" data-testid="character-skeleton">
      <CardHeader className="p-0">
        <Skeleton className="w-full h-64" />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <Skeleton className="h-7 w-full" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-16" />
          <div className="flex items-center gap-1">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-4 w-14" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

