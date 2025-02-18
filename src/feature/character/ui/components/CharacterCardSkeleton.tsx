import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CharacterCardSkeleton = () => {
  return (
    <Card
      className="w-64 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800"
      data-testid="character-skeleton"
    >
      <CardHeader className="p-0">
        <Skeleton className="w-full h-64 bg-gray-200 dark:bg-gray-700" />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <Skeleton className="h-7 w-full bg-gray-200 dark:bg-gray-700" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-16 bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-1">
            <Skeleton className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-14 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
