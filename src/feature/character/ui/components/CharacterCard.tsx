import { Character } from "../../domain/Character";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Skull, HelpCircle } from "lucide-react"

export const CharacterCard = ({ character }: { character: Character }) => {
  const stateIcon = {
    Alive: <Heart className="w-4 h-4 text-green-500 dark:text-green-400" />,
    Dead: <Skull className="w-4 h-4 text-red-500 dark:text-red-400" />,
    unknown: <HelpCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  }

  return (
    <Card className="w-64 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800">
      <CardHeader className="p-0">
        <img
          src={character.imgUrl || "/placeholder.svg"}
          alt={`${character.name}'s image`}
          className="w-full h-64 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold truncate text-gray-900 dark:text-gray-100">{character.name}</h2>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="secondary" className="text-sm bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
            {character.species}
          </Badge>
          <div className="flex items-center gap-1">
            {stateIcon[character.state]}
            <span className="text-sm text-gray-600 dark:text-gray-300">{character.state}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}