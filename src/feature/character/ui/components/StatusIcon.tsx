import { Heart, Skull, HelpCircle } from "lucide-react";

export const statusIcon = {
    Alive: <Heart className="w-4 h-4 text-green-500 dark:text-green-400" />,
    Dead: <Skull className="w-4 h-4 text-red-500 dark:text-red-400" />,
    unknown: <HelpCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  }